import kpImg6 from '@/assets/kp/kp_img_6.jpg';
import kpImg7 from '@/assets/kp/kp_img_7.jpg';
import kpImg8 from '@/assets/kp/kp_img_8.jpg';
import kpImg9 from '@/assets/kp/kp_img_9.jpg';
import kpImg10 from '@/assets/kp/kp_img_10.jpg';
import kpImg11 from '@/assets/kp/kp_img_11.jpg';

export function KPPage4Systems() {
  return (
    <div className="kp-page">
      <div className="sys-hero">
        <img src={kpImg6} alt="Системы" />
        <div className="sys-hero-ov"></div>
        <div className="sys-hero-txt">
          <div className="label">Технологии</div>
          <h2>Наши системы</h2>
        </div>
      </div>

      <div className="sys-cards">
        {/* TANGO/TIARA */}
        <div className="sys-card">
          <div className="sys-card-head">
            <h4>TANGO / TIARA</h4>
            <p>Складная безрамная система</p>
          </div>
          <div className="sys-card-body">
            <img src={kpImg7} alt="TANGO" />
            <table className="spec-mini">
              <tbody>
                <tr><td>Тип</td><td>Безрамное складное</td></tr>
                <tr><td>Открывание</td><td>Складное от центра / в одну сторону</td></tr>
                <tr><td>Стекло</td><td>Закалённое 10 мм / Триплекс 5+5</td></tr>
                <tr><td>Макс. высота</td><td>до 3 200 мм</td></tr>
                <tr><td>Колонны</td><td>Отсутствуют</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SLIDER */}
        <div className="sys-card">
          <div className="sys-card-head">
            <h4>SLIDER</h4>
            <p>Раздвижная система</p>
          </div>
          <div className="sys-card-body">
            <img src={kpImg8} alt="SLIDER" />
            <table className="spec-mini">
              <tbody>
                <tr><td>Тип</td><td>Раздвижное остекление</td></tr>
                <tr><td>Открывание</td><td>Створки сдвигаются параллельно</td></tr>
                <tr><td>Стекло</td><td>Закалённое 8-10 мм</td></tr>
                <tr><td>Макс. высота</td><td>до 2 800 мм</td></tr>
                <tr><td>Колонны</td><td>Минимальные направляющие</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="feat-2col">
        <div>
          <div className="feat-row">
            <div className="feat-dot"></div>
            <div>
              <h5>Закалённое стекло</h5>
              <p>Безопасное стекло 10 мм, соответствует израильскому стандарту 1099.</p>
            </div>
          </div>
          <div className="feat-row">
            <div className="feat-dot"></div>
            <div>
              <h5>Детская защита</h5>
              <p>Специальные замки, предотвращающие открытие детьми.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="feat-row">
            <div className="feat-dot"></div>
            <div>
              <h5>Без колонн</h5>
              <p>Панорамный вид без вертикальных перегородок.</p>
            </div>
          </div>
          <div className="feat-row">
            <div className="feat-dot"></div>
            <div>
              <h5>Местное производство</h5>
              <p>Вся продукция изготавливается на фабрике в Израиле.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'5px', margin:'0 36px 16px'}}>
        <img src={kpImg9} alt="" style={{width:'100%', height:'36mm', objectFit:'cover', borderRadius:'4px'}} />
        <img src={kpImg10} alt="" style={{width:'100%', height:'36mm', objectFit:'cover', borderRadius:'4px'}} />
        <img src={kpImg11} alt="" style={{width:'100%', height:'36mm', objectFit:'cover', borderRadius:'4px'}} />
      </div>

      {/* FAQ */}
      <div className="faq-box">
        <h4>Часто задаваемые вопросы</h4>
        <div className="faq-item">
          <div className="faq-q">Безопасно ли закалённое стекло?</div>
          <div className="faq-a">Да. В случае разбития оно рассыпается на мелкие неострые фрагменты, безопасные для человека. Соответствует стандарту.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Можно ли открыть балкон полностью?</div>
          <div className="faq-a">Да. Складная система позволяет собрать все створки в одну сторону, полностью открывая проём.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Сколько длится монтаж?</div>
          <div className="faq-a">Обычно 1–3 рабочих дня в зависимости от сложности объекта.</div>
        </div>
      </div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">mdtinyhaus.com</span>
        <span className="fn">4</span>
      </div>
    </div>
  );
}
