import { KPFormData, KPComputed } from '@/hooks/useKPData';
import kpImg1 from '@/assets/kp/kp_img_1.png';
import kpImg2 from '@/assets/kp/kp_img_2.jpg';

interface Props {
  data: KPFormData;
  computed: KPComputed;
}

const heSystem = (type: string) => type.replace('Система ', 'מערכת ');

export function KPPage1CoverHe({ data, computed }: Props) {
  return (
    <div className="kp-page kp-rtl cover">
      <div className="cover-top">
        <div className="cover-logo">
          <img src={kpImg1} alt="Modernbuilding" />
          <span className="brand-name">MODERNBUILDING</span>
        </div>
        <div className="cover-meta">
          <span className="order-no">מס׳ <span className="v">{data.orderNumber || '—'}</span></span>
          תאריך: <span className="v">{data.date || '—'}</span><br />
          תוקף ההצעה 10 ימים
        </div>
      </div>

      <div className="cover-hero">
        <img src={kpImg2} alt="סגירת מרפסת" />
        <div className="cover-hero-grad"></div>
        <div className="cover-title">
          <div className="label">הצעת מחיר</div>
          <h1>
            סגירת מרפסת<br />
            <span className="gold-text"><span className="v">{heSystem(data.productType) || '—'}</span></span>
          </h1>
          <div className="sub">Modernbuilding · mdtinyhaus.com · ישראל · ייצור והתקנה</div>
        </div>
      </div>

      <div className="cover-strip">
        <div className="strip-item"><label>לקוח</label><span className="v">{data.clientName || '—'}</span></div>
        <div className="strip-item"><label>עיר</label><span className="v">{data.city || '—'}</span></div>
        <div className="strip-item"><label>אורך × גובה</label><span>{data.length} × {data.height} ס״מ</span></div>
        <div className="strip-item"><label>שטח</label><span><span className="v">{computed.area}</span> מ״ר</span></div>
      </div>

      <div className="cover-greet">
        שלום, <strong><span className="v">{data.clientName || '—'}</span></strong>!<br />
        תודה על המידות שמסרת עבור המרפסת שלך.
        על בסיס הנתונים שסיפקת, חברת <strong>Modernbuilding</strong> הכינה הצעת מחיר מקדמית למערכת <strong>{data.closureSystem}</strong> —
        שתעזור לך להפוך את המרפסת למרחב נוסף — בטוח, פונקציונלי ואסתטי.
      </div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">mdtinyhaus.com</span>
        <span className="fn">1</span>
      </div>
    </div>
  );
}
