import kpImg6 from '@/assets/kp/kp_img_6.jpg';
import kpImg7 from '@/assets/kp/kp_img_7.jpg';
import kpImg8 from '@/assets/kp/kp_img_8.jpg';
import { KPFormData } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
}

export function KPPage4SystemsHe({ data }: Props) {
  return (
    <div className="kp-page kp-rtl">
      <div className="sys-hero" style={{ height: '62mm' }}>
        <img src={kpImg6} alt="מערכת סגירה" />
        <div className="sys-hero-ov"></div>
        <div className="sys-hero-txt">
          <div className="label">המערכות שלנו</div>
          <h2>בחרו את<br/>הפתרון שלכם</h2>
        </div>
      </div>

      <div className="sys-cards" style={{ padding: '12px 36px 10px', gap: '10px' }}>
        {/* TANGO/TIARA */}
        <div className="sys-card">
          <div className="sys-card-head" style={{ padding: '8px 14px' }}>
            <h4>מערכת TANGO / TIARA</h4>
            <p style={{ fontSize: '0.76rem', marginTop: '2px' }}>סגירה נאספת ללא מסגרת</p>
          </div>
          <div className="sys-card-body" style={{ padding: '8px 14px' }}>
            <img src={kpImg7} alt="Tango Tiara" style={{ height: '26mm', marginBottom: '6px' }} />
            <p style={{fontSize:'0.76rem',marginBottom:'4px',lineHeight:'1.35'}}>פתרון אידיאלי למי שמעריך נוף פנורמי מקסימלי ואסתטיקה. הפנלים ניתנים לקיפול מלא כ"ספר", והופכים את המרפסת לוורנדה פתוחה.</p>
            <table className="spec-mini" style={{ fontSize: '0.78rem' }}>
              <tbody>
                <tr><td>סוג זכוכית</td><td>מחוסמת 10מ״מ / טריפלקס 5+5מ״מ</td></tr>
                <tr><td>פתיחה</td><td>מתקפלת, 100% של הפתח פתוח</td></tr>
                <tr><td>אסתטיקה</td><td>מקסימלית, ללא מסגרות</td></tr>
                <tr><td>בידוד תרמי</td><td>קר (הגנה מאבק/רוח)</td></tr>
                <tr><td>אחריות</td><td>5 שנים על המערכת, לא כולל זכוכית</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SLIDER */}
        <div className="sys-card">
          <div className="sys-card-head" style={{ padding: '8px 14px' }}>
            <h4>מערכת SLIDER</h4>
            <p style={{ fontSize: '0.76rem', marginTop: '2px' }}>זיגוג הזזה</p>
          </div>
          <div className="sys-card-body" style={{ padding: '8px 14px' }}>
            <img src={kpImg8} alt="Slider" style={{ height: '26mm', marginBottom: '6px' }} />
            <p style={{fontSize:'0.76rem',marginBottom:'4px',lineHeight:'1.35'}}>מערכת פונקציונלית החוסכת מקום — הכנפות נעות לאורך המסילות, ללא פתיחה פנימה. אפשרות חסכונית יותר.</p>
            <table className="spec-mini" style={{ fontSize: '0.78rem' }}>
              <tbody>
                <tr><td>סוג זכוכית</td><td>מחוסמת 10מ״מ / מערכות אלומיניום</td></tr>
                <tr><td>פתיחה</td><td>הזזה לצדדים (כמו ארון הזזה)</td></tr>
                <tr><td>חיסכון</td><td>חסכוני יותר מסגירה ללא מסגרת</td></tr>
                <tr><td>בידוד תרמי</td><td>קר או חצי-חם (עם זוגיות)</td></tr>
                <tr><td>אחריות</td><td>5 שנים על המערכת, לא כולל זכוכית</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="faq-box" style={{ margin: '0 36px 8px', padding: '12px 16px' }}>
        <h4 style={{ marginBottom: '8px' }}>תשובות לשאלות נפוצות</h4>
        <div className="faq-item" style={{ marginBottom: '8px', paddingBottom: '8px' }}>
          <div className="faq-q" style={{ fontSize: '0.88rem' }}>הזכוכית שבירה?</div>
          <div className="faq-a" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>רק נראה כך. זכוכית מחוסמת 10 מ״מ — כשנשברת היא מתפוררת לפירורים בטוחים עם קצוות עגולים, ללא סכנה לפציעה.</div>
        </div>
        <div className="faq-item" style={{ marginBottom: '8px', paddingBottom: '8px' }}>
          <div className="faq-q" style={{ fontSize: '0.88rem' }}>מפחד שיהיה רועש?</div>
          <div className="faq-a" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>להיפך. פרופילים איכותיים ואטמי סיליקון בין הכנפות מפחיתים את רעש הרחוב ומבטיחים שקט בתוך הדירה.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q" style={{ fontSize: '0.88rem' }}>יקר וארוך?</div>
          <div className="faq-a" style={{ fontSize: '0.8rem', lineHeight: '1.45' }}>יש לנו ייצור משלנו בישראל המבטיח זמן ייצור של 3 שבועות בלבד. נסו ותשתכנעו!</div>
        </div>
      </div>

      <div className="pg-footer" style={{ marginTop: '8px' }}>
        <span className="fb">Modernbuilding</span>
        <span className="fc">הזמנה מס׳ <span className="v">{data.orderNumber}</span></span>
        <span className="fn">4</span>
      </div>
    </div>
  );
}
