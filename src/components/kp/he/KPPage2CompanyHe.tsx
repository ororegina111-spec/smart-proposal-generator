import kpImg3 from '@/assets/kp/kp_img_3.jpg';
import kpImg4 from '@/assets/kp/kp_img_4.jpg';
import kpImg5 from '@/assets/kp/kp_img_5.jpg';
import { KPFormData } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
}

export function KPPage2CompanyHe({ data }: Props) {
  return (
    <div className="kp-page kp-rtl">
      <div className="inner">
        <div className="label">על החברה</div>
        <h2 className="sec">Modernbuilding — אמינות,<br/>בטיחות ואסתטיקה</h2>
        <div className="divider"></div>

        <div className="about-grid">
          <div>
            <p style={{marginBottom:'16px', lineHeight:'1.7'}}>אנו מומחים בתחום סגירת מרפסות מודרנית. אנו מייצגים יצרנים הפועלים בשוק הישראלי למעלה מ-7 שנים עם מחזור ייצור מלא.</p>
            <p style={{marginBottom:'16px', lineHeight:'1.7'}}>כל הייצור מתבצע במפעל אותו תוכלו לבקר בכל עת ולהשתכנע שעבודות ההזמנה שלכם מבוצעות בזמן.</p>
            <p style={{lineHeight:'1.7'}}>הייצור שלנו מבטיח איכות גבוהה, מהירות ואמינות.</p>
          </div>
          <div className="about-photos">
            <img src={kpImg3} alt="מרפסת 1" />
            <img src={kpImg4} alt="מרפסת 2" />
            <img src={kpImg5} alt="מרפסת 3" />
          </div>
        </div>

        <div className="clients-block">
          <h3>מה מקבלים הלקוחות שלנו</h3>
          <div className="clients-grid">
            <div className="client-item">
              <svg className="gold-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="9" width="18" height="13" rx="1"/>
                <path d="M9 22V12h6v10"/>
                <path d="M3 9l9-6 9 6"/>
              </svg>
              <h5>מרפסת — לחדר</h5>
              <p>יוצרים מרחב נוסף נוח ונקי, מוגן מרעש, אבק וחום קיצוני</p>
            </div>
            <div className="client-item">
              <svg className="gold-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3 3"/>
              </svg>
              <h5>לוחות זמנים קצרים</h5>
              <p>בזכות הייצור המקומי, ניצור את ההזמנה שלך תוך 3 שבועות, לא 2 חודשים כמו המתחרים</p>
            </div>
            <div className="client-item">
              <svg className="gold-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>
              </svg>
              <h5>בטיחות</h5>
              <p>זכוכית מחוסמת 10 מ״מ או טריפלקס 5+5 מ״מ, ומנעולי ילדים ייעודיים</p>
            </div>
          </div>
        </div>

        <div className="label" style={{marginBottom:'10px'}}>היתרונות שלכם</div>
        <div className="benefits-grid">
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/><rect x="9" y="14" width="6" height="7"/></svg>
            <h5>ייצור ישראלי</h5>
            <p>מחזור ייצור מלא במפעל מקומי — בקרו בכל עת</p>
          </div>
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>
            <h5>התקנה עד 3 ימים</h5>
            <p>זמן ההתקנה באתר שלך — עד 3 ימי עבודה לאחר הייצור</p>
          </div>
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><path d="M12 2l2.5 7H21l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h6.5z"/></svg>
            <h5>ייצור משלנו בישראל</h5>
            <p>יש לנו ייצור משלנו בישראל המבטיח זמן ייצור של 3 שבועות בלבד. נסו ותשתכנעו!</p>
          </div>
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="12" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/></svg>
            <h5>מנעולי ילדים</h5>
            <p>בלוקים ייחודיים — בטוח לילדים ולקשישים</p>
          </div>
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            <h5>חום ושקט</h5>
            <p>הפחתת רעש והגנה מחום בזכות פרופילים ואטמים איכותיים</p>
          </div>
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>
            <h5>אסתטיקה</h5>
            <p>נוף פנורמי ללא מסגרות, עיצוב מודרני ונקי</p>
          </div>
        </div>
      </div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">הצעה מס׳ <span className="v">{data.orderNumber}</span></span>
        <span className="fn">2</span>
      </div>
    </div>
  );
}
