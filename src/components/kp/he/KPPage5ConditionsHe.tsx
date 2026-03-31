import { KPFormData } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
}

export function KPPage5ConditionsHe({ data }: Props) {
  return (
    <div className="kp-page kp-rtl">
      <div className="cond-head">
        <div className="label">תנאים כלליים</div>
        <h2>תנאי הצעת המחיר</h2>
      </div>

      <div className="inner" style={{paddingTop:'22px'}}>
        <ul className="cond-list">
          <li>המחיר המוצג הינו אומדן בלבד, המבוסס על המידות והמידע שנמסרו על-ידי הלקוח. המחירים מוצגים ללא מע״מ.</li>
          <li>המחיר הסופי ייקבע לאחר ביצוע מדידה מקצועית באתר על-ידי נציג החברה.</li>
          <li>מחיר המ״ר יישאר ללא שינוי. ככל שתימצא סטייה — המחיר הכולל יעודכן בהתאם.</li>
          <li>הצעת מחיר זו אינה מהווה אישור הזמנה. ההזמנה תיכנס לתוקף עם חתימת הלקוח ו/או ביצוע תשלום המקדמה.</li>
          <li>ביצוע תשלום המקדמה ייחשב כהסכמה מלאה לכל תנאי ההצעה וכאישור סופי ומחייב לביצוע ההזמנה.</li>
          <li>מועד האספקה וההתקנה המשוער הינו עד 15 ימי עבודה. המועד הסופי ייקבע לאחר מדידה סופית וקבלת מקדמה.</li>
          <li>במקרה של דרישות מיוחדות מצד מהנדס, אדריכל, מפקח או הרשות המקומית — ייתכנו התאמות טכניות ו/או שינויים במחיר שיסוכמו מראש.</li>
          <li>החברה לא תישא באחריות לעיכובים הנובעים מכוח עליון, לרבות מלחמה, מצב חירום, שביתות, עיכובים בייבוא.</li>
          <li>כל המערכות מיוצרות לפי מידות מיוחדות. ההזמנה סופית ומחייבת מרגע אישורה. לא ניתן לבטל; הסכומים ששולמו לא יוחזרו.</li>
          <li>הבעלות על המוצרים תישאר בידי החברה עד לתשלום מלוא התמורה.</li>
          <li><strong>הצעת מחיר זו תקפה למשך 10 ימים</strong> ממועד הנפקתה.</li>
        </ul>

        <div className="label" style={{marginBottom:'10px'}}>תנאי תשלום</div>
        <div className="pay-steps">
          <div className="pay-step">
            <span className="pct">1,000 ₪</span>
            <div className="when">בעת אישור ההזמנה — לפני הגעת נציג. מקוזז מהמחיר הכולל.</div>
          </div>
          <div className="pay-step">
            <span className="pct">50%</span>
            <div className="when">לאחר מדידה סופית ואישור המחיר — מקדמה. רק לאחר מכן עובר לייצור.</div>
          </div>
          <div className="pay-step">
            <span className="pct">40%</span>
            <div className="when">עם סיום הייצור והכנת המערכת להתקנה.</div>
          </div>
          <div className="pay-step">
            <span className="pct">10%</span>
            <div className="when">עם סיום ההתקנה בפועל באתר הלקוח.</div>
          </div>
        </div>

        <div className="bank-box">
          <div className="btitle">פרטי חשבון לתשלום</div>
          ק.ק. בניה מודרנית בע״מ<br/>
          <strong>בנק הפועלים (12)</strong> · סניף 634 · מספר חשבון: <strong>73390</strong>
        </div>

        <div className="valid-note">
          ⏱ זמן ייצור: <strong>מ-21 ימי עבודה</strong> ממועד ביצוע מדידה סופית ואישור ההזמנה, לעומת 61 ימי עבודה אצל המתחרים.
        </div>
      </div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc"><span className="v">{data.clientName || '—'}</span> · <span className="v">{data.city || '—'}</span> · mdtinyhaus.com</span>
        <span className="fn">5</span>
      </div>
    </div>
  );
}
