/**
 * Export KP as a self-contained HTML file.
 * Converts all images to inline base64 data URIs for portability.
 */

async function imageToBase64(imgEl: HTMLImageElement): Promise<string> {
  const src = imgEl.src;
  
  // Already a data URI
  if (src.startsWith('data:')) return src;
  
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve(src);
      reader.readAsDataURL(blob);
    });
  } catch {
    return src;
  }
}

export async function exportAsHTML(renderAreaId: string, fileName: string) {
  const renderArea = document.getElementById(renderAreaId);
  if (!renderArea) return;

  // Get all stylesheets content
  const styleSheets = Array.from(document.styleSheets);
  let allCSS = '';
  
  styleSheets.forEach(sheet => {
    try {
      const rules = Array.from(sheet.cssRules || []);
      rules.forEach(rule => {
        allCSS += rule.cssText + '\n';
      });
    } catch {
      if (sheet.href) {
        allCSS += `@import url("${sheet.href}");\n`;
      }
    }
  });

  // Clone the render area
  const clone = renderArea.cloneNode(true) as HTMLElement;
  
  // Convert all images to base64
  const originalImages = renderArea.querySelectorAll('img');
  const cloneImages = clone.querySelectorAll('img');
  
  for (let i = 0; i < originalImages.length; i++) {
    const base64 = await imageToBase64(originalImages[i]);
    cloneImages[i].src = base64;
  }

  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>КП — Modernbuilding — ${fileName}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Raleway', sans-serif;
  background: #F7F5F0;
  color: #1A1A1A;
  line-height: 1.7;
}
${allCSS}

/* Print overrides */
@media print {
  .no-print { display: none !important; }
  body { background: white !important; margin: 0 !important; padding: 0 !important; }
  .kp-page {
    width: 210mm !important;
    min-height: 297mm !important;
    margin: 0 !important;
    page-break-after: always !important;
    page-break-inside: avoid !important;
    box-shadow: none !important;
  }
  .kp-page:last-child { page-break-after: auto !important; }
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
}
@page { size: A4 portrait; margin: 0; }
</style>
</head>
<body>
<div class="no-print" style="text-align:center;padding:20px;">
  <button onclick="window.print()" style="background:linear-gradient(135deg,#B8892A,#E8D08A,#B8892A);border:none;padding:13px 36px;font-family:'Raleway',sans-serif;font-size:1rem;font-weight:700;color:#0A0A0A;border-radius:4px;cursor:pointer;letter-spacing:1px;">🖨️ Сохранить как PDF</button>
  <p style="font-size:0.82rem;color:#888;margin-top:8px;">Нажмите для печати или сохранения в PDF</p>
</div>
${clone.innerHTML}
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

export function printPDF() {
  window.print();
}
