import { KPFormData, KPComputed } from '@/hooks/useKPData';
import kpImg1 from '@/assets/kp/kp_img_1.png';
import kpImg2 from '@/assets/kp/kp_img_2.jpg';

interface Props {
  data: KPFormData;
  computed: KPComputed;
}

export function KPPage1Cover({ data, computed }: Props) {
  return (
    <div className="kp-page cover">
      <div className="cover-top">
        <div className="cover-logo">
          <img src={kpImg1} alt="Logo" />
          <span className="brand-name">Modernbuilding</span>
        </div>
        <div className="cover-meta">
          <span className="order-no">№ {data.orderNumber || '—'}</span>
          Дата: {data.date || '—'}<br />
          Действует 10 дней
        </div>
      </div>

      <div className="cover-hero">
        <img src={kpImg2} alt="Hero" />
        <div className="cover-hero-grad"></div>
        <div className="cover-title">
          <div className="label">Коммерческое предложение</div>
          <h1>
            Закрытие балкона<br />
            <span className="gold-text">{data.productType || '—'}</span>
          </h1>
          <div className="sub">mdtinyhaus.com · Израиль · Производство и монтаж</div>
        </div>
      </div>

      <div className="cover-strip">
        <div className="strip-item">
          <label>Клиент</label>
          <span className="v">{data.clientName || '—'}</span>
        </div>
        <div className="strip-item">
          <label>Город</label>
          <span className="v">{data.city || '—'}</span>
        </div>
        <div className="strip-item">
          <label>Размеры</label>
          <span>{data.length} × {data.height} см</span>
        </div>
        <div className="strip-item">
          <label>Площадь</label>
          <span className="v">{computed.area} м²</span>
        </div>
      </div>

      <div className="cover-greet">
        Здравствуйте, <strong>{data.clientName || '—'}</strong>! Благодарим за интерес к системам <strong>Modernbuilding</strong>. На основании ваших данных мы подготовили предложение по системе <strong>{data.closureSystem}</strong>.
      </div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">mdtinyhaus.com</span>
        <span className="fn">1</span>
      </div>
    </div>
  );
}
