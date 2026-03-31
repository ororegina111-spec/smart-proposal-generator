import { useKPData } from '@/hooks/useKPData';
import { KPSidebar } from '@/components/kp/KPSidebar';
import { KPPage1Cover } from '@/components/kp/KPPage1Cover';
import { KPPage2Company } from '@/components/kp/KPPage2Company';
import { KPPage3Estimate } from '@/components/kp/KPPage3Estimate';
import { KPPage4Systems } from '@/components/kp/KPPage4Systems';
import { KPPage5Conditions } from '@/components/kp/KPPage5Conditions';
import { exportAsHTML, printPDF } from '@/lib/kp-export';
import '@/styles/kp-template.css';

const Index = () => {
  const { formData, updateField, resetForm, computed } = useKPData();

  const handlePrintPDF = () => {
    if (!formData.clientName) {
      alert('Введите имя клиента');
      return;
    }
    setTimeout(() => printPDF(), 200);
  };

  const handleDownloadHTML = () => {
    if (!formData.clientName) {
      alert('Введите имя клиента');
      return;
    }
    const fileName = `КП_${formData.clientName}_${formData.orderNumber}`;
    exportAsHTML('kp-render-area', fileName);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <KPSidebar
        data={formData}
        computed={computed}
        onUpdate={updateField}
        onReset={resetForm}
        onPrintPDF={handlePrintPDF}
        onDownloadHTML={handleDownloadHTML}
      />
      
      <div
        className="kp-preview-wrapper"
        style={{
          marginLeft: '300px',
          padding: '20px',
          background: '#2A2A2A',
          flex: 1,
          minHeight: '100vh',
        }}
      >
        <div id="kp-render-area">
          <KPPage1Cover data={formData} computed={computed} />
          <KPPage2Company data={formData} />
          <KPPage3Estimate data={formData} computed={computed} />
          <KPPage4Systems />
          <KPPage5Conditions data={formData} />
        </div>
      </div>
    </div>
  );
};

export default Index;
