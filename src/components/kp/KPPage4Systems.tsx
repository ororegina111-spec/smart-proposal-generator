import kpImg6 from '@/assets/kp/kp_img_6.jpg';
import kpImg7 from '@/assets/kp/kp_img_7.jpg';
import kpImg8 from '@/assets/kp/kp_img_8.jpg';
import kpImg9 from '@/assets/kp/kp_img_9.jpg';
import kpImg10 from '@/assets/kp/kp_img_10.jpg';
import kpImg11 from '@/assets/kp/kp_img_11.jpg';

export function KPPage4Systems() {
  return (
    <div className="kp-page" style={{display:'flex', flexDirection:'column', minHeight:'297mm'}}>
      <div className="sys-hero">
        <img src={kpImg6} alt="Системы" />
        <div className="sys-hero-ov"></div>
        <div className="sys-hero-txt">
          <div className="label">Наши системы</div>
          <h2>Выберите<br/>своё решение</h2>
        </div>
      </div>

      <div className="sys-cards" style={{padding:'16px 36px', gap:'12px'}}>
        {/* TANGO/TIARA */}
        <div className="sys-card">
          <div className="sys-card-head" style={{padding:'10px 16px'}}>
            <h4>СИСТЕМА TANGO / TIARA</h4>
            <p>Безрамное складное остекление</p>
          </div>
          <div className="sys-card-body" style={{padding:'10px 16px'}}>
            <img src={kpImg7} alt="TANGO" style={{height:'32mm', marginBottom:'8px'}} />
            <p style={{fontSize:'0.82rem',marginBottom:'6px',lineHeight:'1.45'}}>Идеальное решение для тех, кто ценит максимальный панорамный обзор и эстетику. Панели складываются «книжкой», открывая 100% проёма.</p>
            <table className="spec-mini">
              <tbody>
                <tr><td>Тип стекла</td><td>Закалённое 10 мм / Триплекс 5+5 мм</td></tr>
                <tr><td>Открывание</td><td>Складывается, 100% проёма открыто</td></tr>
                <tr><td>Эстетика</td><td>Максимальная, без рам</td></tr>
                <tr><td>Теплоизоляция</td><td>Холодное (защита от пыли/ветра)</td></tr>
                <tr><td>Гарантия</td><td>5 лет на систему, кроме стёкол</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SLIDER */}
        <div className="sys-card">
          <div className="sys-card-head" style={{padding:'10px 16px'}}>
            <h4>СИСТЕМА SLIDER</h4>
            <p>Раздвижное остекление</p>
          </div>
          <div className="sys-card-body" style={{padding:'10px 16px'}}>
            <img src={kpImg8} alt="SLIDER" style={{height:'32mm', marginBottom:'8px'}} />
            <p style={{fontSize:'0.82rem',marginBottom:'6px',lineHeight:'1.45'}}>Функциональная система — створки сдвигаются по направляющим, экономя пространство. Бюджетный вариант с хорошей защитой.</p>
            <table className="spec-mini">
              <tbody>
                <tr><td>Тип стекла</td><td>Закалённое 10 мм / Алюминиевые системы</td></tr>
                <tr><td>Открывание</td><td>Сдвигается в стороны (как купе)</td></tr>
                <tr><td>Экономия</td><td>Бюджетнее безрамного остекления</td></tr>
                <tr><td>Теплоизоляция</td><td>Холодное или полутёплое (со стеклопакетом)</td></tr>
                <tr><td>Гарантия</td><td>5 лет на систему, кроме стёкол</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-box" style={{margin:'0 36px 12px', padding:'14px 18px'}}>
        <h4 style={{marginBottom:'10px'}}>Часто задаваемые вопросы</h4>
        <div className="faq-item">
          <div className="faq-q">Стекло хрупкое?</div>
          <div className="faq-a">Только на вид. Закалённое стекло 10 мм при разрушении рассыпается на безопасную крошку с тупыми краями — не причиняет вреда.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Боюсь, что будет шумно?</div>
          <div className="faq-a">Напротив. Качественные профили и силиконовые уплотнители между полотнами снижают уличный шум, обеспечивая тишину в помещении.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Дорого и долго?</div>
          <div className="faq-a">Собственное производство в Израиле — срок изготовления 3 недели, монтаж до 3 дней. Приезжайте на фабрику и убедитесь лично!</div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'4px', margin:'0 36px 0'}}>
        <img src={kpImg9} alt="" style={{width:'100%', height:'30mm', objectFit:'cover', borderRadius:'4px'}} />
        <img src={kpImg10} alt="" style={{width:'100%', height:'30mm', objectFit:'cover', borderRadius:'4px'}} />
        <img src={kpImg11} alt="" style={{width:'100%', height:'30mm', objectFit:'cover', borderRadius:'4px'}} />
      </div>

      <div style={{flex:1}}></div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">mdtinyhaus.com</span>
        <span className="fn">4</span>
      </div>
    </div>
  );
}
