import kpImg6 from '@/assets/kp/kp_img_6.jpg';
import kpImg7 from '@/assets/kp/kp_img_7.jpg';
import kpImg8 from '@/assets/kp/kp_img_8.jpg';
import kpImg9 from '@/assets/kp/kp_img_9.jpg';
import kpImg10 from '@/assets/kp/kp_img_10.jpg';
import kpImg11 from '@/assets/kp/kp_img_11.jpg';
import { KPFormData } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
}

export function KPPage4SystemsHe({ data }: Props) {
  return (
    <div className="kp-page kp-rtl">
      <div className="sys-hero">
        <img src={kpImg6} alt="מערכת סגירה" />
        <div className="sys-hero-ov"></div>
        <div className="sys-hero-txt">
          <div className="label">המערכות שלנו</div>
          <h2>בחרו את<br/>הפתרון שלכם</h2>
        </div>
      </div>

      <div className="sys-cards">
        {/* TANGO/TIARA */}
        <div className="sys-card">
          <div className="sys-card-head">
            <h4>מערכת TANGO / TIARA</h4>
            <p>סגירה נאספת ללא מסגרת</p>
          </div>
          <div className="sys-card-body">
            <img src={kpImg7} alt="Tango Tiara" />
            <p style={{fontSize:'0.87rem',marginBottom:'10px'}}>פתרון אידיאלי למי שמעריך נוף פנורמי מקסימלי ואסתטיקה. מבנה מזכוכית מחוסמת ללא מסגרות אנכיות. הפנלים ניתנים לקיפול מלא כ"ספר", והופכים את המרפסת לוורנדה פתוחה.</p>
            <table className="spec-mini">
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
          <div className="sys-card-head">
            <h4>מערכת SLIDER</h4>
            <p>זיגוג הזזה</p>
          </div>
          <div className="sys-card-body">
            <img src={kpImg8} alt="Slider" />
            <p style={{fontSize:'0.87rem',marginBottom:'10px'}}>מערכת פונקציונלית החוסכת מקום — הכנפות נעות לאורך המסילות, ללא פתיחה פנימה. מספקת הגנה טובה מרוח ומשקעים. אפשרות חסכונית יותר.</p>
            <table className="spec-mini">
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

      <div className="faq-box">
        <h4>תשובות לשאלות נפוצות</h4>
        <div className="faq-item">
          <div className="faq-q">הזכוכית שבירה?</div>
          <div className="faq-a">רק נראה כך. זכוכית מחוסמת 10 מ״מ — כשנשברת היא מתפוררת לפירורים בטוחים עם קצוות עגולים, ללא סכנה לפציעה.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">מפחד שיהיה רועש?</div>
          <div className="faq-a">להיפך. פרופילים איכותיים ואטמי סיליקון בין הכנפות מפחיתים את רעש הרחוב ומבטיחים שקט בתוך הדירה.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">יקר וארוך?</div>
          <div className="faq-a">יש לנו ייצור משלנו בישראל המבטיח זמן ייצור של 3 שבועות בלבד. נסו ותשתכנעו!</div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'5px', margin:'0 36px 16px'}}>
        <img src={kpImg9} alt="" style={{width:'100%', height:'36mm', objectFit:'cover', borderRadius:'4px'}} />
        <img src={kpImg10} alt="" style={{width:'100%', height:'36mm', objectFit:'cover', borderRadius:'4px'}} />
        <img src={kpImg11} alt="" style={{width:'100%', height:'36mm', objectFit:'cover', borderRadius:'4px'}} />
      </div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">הזמנה מס׳ <span className="v">{data.orderNumber}</span></span>
        <span className="fn">4</span>
      </div>
    </div>
  );
}
