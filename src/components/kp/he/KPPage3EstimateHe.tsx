import { KPFormData, KPComputed } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
  computed: KPComputed;
}

const heSystem = (type: string) => type.replace('Система ', 'מערכת ');
const heGlass = (type: string) => {
  const map: Record<string, string> = {
    'Прозрачное закалённое 10 мм': 'שקוף מחוסם 10 מ״מ',
    'Триплекс 5+5 мм прозрачный': 'טריפלקס 5+5 מ״מ שקוף',
    'Триплекс 5+5 мм молочный': 'טריפלקס 5+5 מ״מ חלבי',
    'Противосолнечное 10 мм': 'אנטי-שמש 10 מ״מ',
  };
  return map[type] || type;
};

export function KPPage3EstimateHe({ data, computed }: Props) {
  const fmt = (n: number) => n.toLocaleString('he-IL');

  return (
    <div className="kp-page kp-rtl">
      <div className="est-header">
        <div className="label">אומדן מקדמי</div>
        <h2>סגירת מרפסת — <span className="v">{heSystem(data.productType)}</span></h2>
        <div className="sub">לקוח: <span className="v">{data.clientName || '—'}</span> · <span className="v">{data.city || '—'}</span> · שטח: <span className="v">{computed.area}</span> מ״ר</div>
      </div>

      <div className="inner" style={{paddingTop:'22px'}}>
        {/* Dimension box */}
        <div className="sizes-grid">
          <div className="size-card">
            <label>מערכת</label>
            <span className="val" style={{fontSize:'1rem'}}>{data.productType.replace('Система ', '')}</span>
          </div>
          <div className="size-card">
            <label>אורך</label>
            <span className="val">{data.length}</span>
            <span className="unit">ס״מ</span>
          </div>
          <div className="size-card">
            <label>גובה</label>
            <span className="val">{data.height}</span>
            <span className="unit">ס״מ</span>
          </div>
          <div className="size-card">
            <label>שטח</label>
            <span className="val">{computed.area}</span>
            <span className="unit">מ״ר</span>
          </div>
        </div>

        {/* System box */}
        <div className="sys-box">
          <h4>{heSystem(data.productType)} — סגירה נאספת ללא מסגרת</h4>
          <p>מערכת נאספת ללא עמודים, פתיחה מהמרכז לשני הצדדים או לצד אחד. ייצור ישראלי, בהתאם לדרישות ולתקנים הישראליים.</p>
          <h4 className="glaz-head" style={{fontSize:'1.05rem', marginTop:'10px'}}>זיגוג</h4>
          <p>זכוכית בטיחות טריפלקס 5+5 מ״מ או מחוסמת 10 מ״מ — שקופה, חלבית, אנטי-שמש. כל הזכוכיות עומדות בדרישות התקן הישראלי.</p>
        </div>

        {/* Spec table */}
        <table className="spec">
          <thead>
            <tr>
              <th>מס׳</th><th>פריט</th><th>מפרט</th><th>כמות</th><th>מחיר</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{heSystem(data.productType)}</td>
              <td>סגירה נאספת, אלומיניום + זכוכית</td>
              <td><span className="v">{computed.area}</span> מ״ר</td>
              <td><span className="v">{fmt(data.pricePerSqm)}</span> ₪/מ״ר</td>
            </tr>
            <tr>
              <td>2</td>
              <td>זכוכית</td>
              <td>מחוסמת 10מ״מ / טריפלקס 5+5מ״מ — <span className="v">{heGlass(data.glassType)}</span></td>
              <td>—</td>
              <td>כלול</td>
            </tr>
            <tr>
              <td>3</td>
              <td>התקנה ומונטאז׳</td>
              <td>התקנה מקצועית, עד 3 ימים</td>
              <td>—</td>
              <td>מחירון נפרד</td>
            </tr>
            <tr>
              <td>4</td>
              <td>פסי אלומיניום</td>
              <td>30 מ״מ, צבע תואם / פלסטיק שקוף</td>
              <td>—</td>
              <td><span className="v">{computed.extrasStr}</span> ₪</td>
            </tr>
            <tr className="total">
              <td colSpan={3}><strong>סה״כ (אומדן)</strong></td>
              <td style={{whiteSpace:'nowrap', fontSize:'0.85rem'}}><span className="v">{computed.area}</span> מ״ר</td>
              <td style={{whiteSpace:'nowrap', fontSize:'0.85rem'}}><span className="v">{computed.totalPrice}</span> ₪</td>
            </tr>
          </tbody>
        </table>

        <div className="note-box" style={{fontSize:'0.78rem', lineHeight:'1.4', padding:'8px 14px'}}>
          ⚠️ המחירים מוצגים ללא מע״מ והינם אומדן בלבד. מבוססים על המידות שנמסרו על ידי הלקוח. המחיר הסופי ייקבע לאחר מדידה מקצועית. מחיר המ״ר נשאר קבוע ולא משתנה.
        </div>

        <div className="guarantee-box" style={{fontSize:'0.78rem', lineHeight:'1.4', padding:'8px 14px'}}>
          <h5 style={{fontSize:'0.85rem'}}>🛡️ אחריות</h5>
          <p>אחריות מוגבלת ל-5 שנים על המערכת ועל עבודת ההתקנה, לא כולל זכוכית. האחריות תקפה בתנאי שימוש תקין, תחזוקה נאותה ובהיעדר נזק מכני.</p>
        </div>
      </div>

      <div className="pg-footer" style={{marginTop:'8px'}}>
        <span className="fb">Modernbuilding</span>
        <span className="fc">לקוח: <span className="v">{data.clientName || '—'}</span></span>
        <span className="fn">3</span>
      </div>
    </div>
  );
}
