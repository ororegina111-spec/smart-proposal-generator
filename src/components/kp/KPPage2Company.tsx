import kpImg3 from '@/assets/kp/kp_img_3.jpg';
import kpImg4 from '@/assets/kp/kp_img_4.jpg';
import kpImg5 from '@/assets/kp/kp_img_5.jpg';
import { KPFormData } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
}

export function KPPage2Company({ data }: Props) {
  return (
    <div className="kp-page">
      <div className="inner">
        <div className="label">О компании</div>
        <h2 className="sec">Modernbuilding — надёжность,<br/>безопасность и эстетика</h2>
        <div className="divider"></div>

        <div className="about-grid">
          <div>
            <p style={{marginBottom:'12px'}}>Мы — эксперты в области современного закрытия балконов. Представляем производителей, работающих на рынке Израиля более 7 лет и имеющих полный цикл производства конструкций.</p>
            <p style={{marginBottom:'12px'}}>Всё производство происходит на фабрике, которую вы можете посетить в любой момент и убедиться, что работы по вашему заказу выполняются в срок.</p>
            <p>Наше производство гарантирует высокое качество, оперативность и надёжность.</p>
          </div>
          <div className="about-photos">
            <img src={kpImg3} alt="Фабрика" />
            <img src={kpImg4} alt="Балкон 1" />
            <img src={kpImg5} alt="Балкон 2" />
          </div>
        </div>

        {/* Clients block */}
        <div className="clients-block">
          <h3>Что получают наши клиенты</h3>
          <div className="clients-grid">
            <div className="client-item">
              <svg className="gold-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <h5>Балкон в комнату</h5>
              <p>Защита от шума, пыли и сильной жары. Создание полезного пространства.</p>
            </div>
            <div className="client-item">
              <svg className="gold-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <h5>Короткие сроки</h5>
              <p>Изготовление за 21 рабочий день благодаря местному производству в Израиле.</p>
            </div>
            <div className="client-item">
              <svg className="gold-icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h5>Безопасность</h5>
              <p>Закалённое стекло 10 мм и специальные детские защитные замки.</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="label">Ваши выгоды</div>
        <div className="benefits-grid">
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <h5>Местное производство</h5>
            <p>Полный контроль качества на каждом этапе.</p>
          </div>
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <h5>Монтаж до 3 дней</h5>
            <p>Быстрая и чистая установка на объекте.</p>
          </div>
          <div className="benefit">
            <svg className="b-icon" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            <h5>Оплата частями</h5>
            <p>Удобный график: без полной предоплаты.</p>
          </div>
        </div>
      </div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">КП № {data.orderNumber}</span>
        <span className="fn">2</span>
      </div>
    </div>
  );
}
