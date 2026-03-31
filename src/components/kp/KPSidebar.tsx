import { KPFormData, KPComputed } from '@/hooks/useKPData';
import '@/styles/kp-sidebar.css';

interface Props {
  data: KPFormData;
  computed: KPComputed;
  onUpdate: <K extends keyof KPFormData>(key: K, value: KPFormData[K]) => void;
  onReset: () => void;
  onPrintPDF: () => void;
  onDownloadHTML: () => void;
}

export function KPSidebar({ data, computed, onUpdate, onReset, onPrintPDF, onDownloadHTML }: Props) {
  return (
    <div className="kp-sidebar no-print">
      <div className="kp-sidebar-header">
        <h2>🏠 Генератор КП — Балконы</h2>
      </div>

      <div className="kp-sidebar-body">
        <div className="kp-section-label">Реквизиты заказа</div>

        <div className="kp-field">
          <label>№ Заказа</label>
          <input type="text" value={data.orderNumber} onChange={e => onUpdate('orderNumber', e.target.value)} />
        </div>

        <div className="kp-field">
          <label>Дата</label>
          <input type="text" value={data.date} onChange={e => onUpdate('date', e.target.value)} />
        </div>

        <hr className="kp-sep" />
        <div className="kp-section-label">Данные клиента</div>

        <div className="kp-field">
          <label>Имя клиента</label>
          <input type="text" value={data.clientName} placeholder="Иван Петров" onChange={e => onUpdate('clientName', e.target.value)} />
        </div>

        <div className="kp-field">
          <label>Город</label>
          <input type="text" value={data.city} placeholder="Тель-Авив" onChange={e => onUpdate('city', e.target.value)} />
        </div>

        <hr className="kp-sep" />
        <div className="kp-section-label">Характеристики системы</div>

        <div className="kp-field">
          <label>Тип системы</label>
          <select value={data.productType} onChange={e => onUpdate('productType', e.target.value)}>
            <option value="Система TANGO">TANGO</option>
            <option value="Система TIARA">TIARA</option>
            <option value="Система SLIDER">SLIDER</option>
          </select>
        </div>

        <div className="kp-field">
          <label>Тип закрытия</label>
          <select value={data.closureSystem} onChange={e => onUpdate('closureSystem', e.target.value)}>
            <option value="Безрамное складное">Безрамное складное (TANGO/TIARA)</option>
            <option value="Раздвижное остекление">Раздвижное (SLIDER)</option>
          </select>
        </div>

        <div className="kp-field">
          <label>Тип стекла</label>
          <select value={data.glassType} onChange={e => onUpdate('glassType', e.target.value)}>
            <option value="Прозрачное закалённое 10 мм">Прозрачное 10 мм</option>
            <option value="Триплекс 5+5 мм прозрачный">Триплекс 5+5 прозрачный</option>
            <option value="Триплекс 5+5 мм молочный">Триплекс 5+5 молочный</option>
            <option value="Противосолнечное 10 мм">Противосолнечное 10 мм</option>
          </select>
        </div>

        <hr className="kp-sep" />
        <div className="kp-section-label">Размеры балкона</div>

        <div className="kp-field">
          <label>Длина (см)</label>
          <input type="number" value={data.length} min={50} onChange={e => onUpdate('length', Number(e.target.value) || 0)} />
        </div>

        <div className="kp-field">
          <label>Высота (см)</label>
          <input type="number" value={data.height} min={50} onChange={e => onUpdate('height', Number(e.target.value) || 0)} />
        </div>

        <hr className="kp-sep" />
        <div className="kp-section-label">Финансы</div>

        <div className="kp-field">
          <label>Цена за м² (₪, без НДС)</label>
          <input type="number" value={data.pricePerSqm} min={100} onChange={e => onUpdate('pricePerSqm', Number(e.target.value) || 0)} />
        </div>

        <div className="kp-field">
          <label>Доп. работы / Алюм. планки (₪)</label>
          <input type="number" value={data.extras} min={0} onChange={e => onUpdate('extras', Number(e.target.value) || 0)} />
        </div>

        {/* Calculated display */}
        <div className="kp-calc-box">
          <div className="kp-calc-row"><span>Площадь</span><span className="kp-calc-val">{computed.area} м²</span></div>
          <div className="kp-calc-row"><span>Стоимость системы</span><span className="kp-calc-val">{computed.systemCost} ₪</span></div>
          <div className="kp-calc-row"><span>Доп. работы</span><span className="kp-calc-val">{computed.extrasStr} ₪</span></div>
          <div className="kp-calc-row kp-calc-total"><span>ИТОГО</span><span className="kp-calc-val">{computed.totalPrice} ₪</span></div>
        </div>
      </div>

      <div className="kp-sidebar-footer">
        <button className="kp-btn-pdf" onClick={onPrintPDF}>🖨️ Скачать PDF</button>
        <button className="kp-btn-html" onClick={onDownloadHTML}>📄 Скачать HTML</button>
        <button className="kp-btn-reset" onClick={onReset}>↺ Сбросить данные</button>
      </div>
    </div>
  );
}
