import { KPFormData, KPComputed } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
  computed: KPComputed;
}

export function KPPage3Estimate({ data, computed }: Props) {
  const fmt = (n: number) => n.toLocaleString('ru-RU');

  return (
    <div className="kp-page" style={{display:'flex', flexDirection:'column', minHeight:'297mm'}}>
      <div className="est-header">
        <div className="label">Предварительная смета</div>
        <h2>Закрытие балкона — <span className="v">{data.productType}</span></h2>
        <div className="sub">Клиент: <span className="v">{data.clientName || '—'}</span> · <span className="v">{data.city || '—'}</span> · Площадь: <span className="v">{computed.area}</span> м²</div>
      </div>

      <div className="inner" style={{paddingTop:'16px', paddingBottom:'10px'}}>
        {/* Sizes */}
        <div className="sizes-grid" style={{marginBottom:'14px'}}>
          <div className="size-card">
            <label>Длина</label>
            <span className="val">{data.length}</span>
            <span className="unit">см</span>
          </div>
          <div className="size-card">
            <label>Высота</label>
            <span className="val">{data.height}</span>
            <span className="unit">см</span>
          </div>
          <div className="size-card">
            <label>Площадь</label>
            <span className="val">{computed.area}</span>
            <span className="unit">м²</span>
          </div>
          <div className="size-card">
            <label>Система</label>
            <span className="val" style={{fontSize:'1rem'}}>{data.productType.replace('Система ', '')}</span>
          </div>
        </div>

        {/* System box */}
        <div className="sys-box">
          <h4>Система <span className="v">{data.productType}</span> — складное безрамное остекление</h4>
          <p>Складная система без колонн, открывание от центра в обе стороны или в одну. Производство Израиль, в соответствии с требованиями и израильскими стандартами.</p>
          <h4 className="glaz-head" style={{fontSize:'1.05rem', marginTop:'10px'}}>Остекление</h4>
          <p>Безопасное стекло триплекс 5+5 мм или закалённое 10 мм — прозрачное, молочное, противосолнечное. Все стёкла соответствуют требованиям израильского стандарта.</p>
        </div>

        {/* Spec table */}
        <table className="spec">
          <thead>
            <tr>
              <th>№</th><th>Наименование</th><th>Спецификация</th><th>Кол-во</th><th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Система <span className="v">{data.productType}</span></td>
              <td>Безрамное складное, алюминий + стекло</td>
              <td><span className="v">{computed.area}</span> м²</td>
              <td><span className="v">{fmt(data.pricePerSqm)}</span> ₪/м²</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Стекло</td>
              <td>Закалённое 10мм / Триплекс 5+5мм — <span className="v">{data.glassType}</span></td>
              <td>—</td>
              <td>Включено</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Монтаж и установка</td>
              <td>Профессиональный монтаж, до 3 дней</td>
              <td>—</td>
              <td>Отдельный прайс</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Алюминиевые планки зазоров</td>
              <td>30 мм, цвет в тон ограждению / прозрачный пластик</td>
              <td>—</td>
              <td><span className="v">{computed.extrasStr}</span> ₪</td>
            </tr>
            <tr className="total">
              <td colSpan={3}><strong>ИТОГО (ориентировочно)</strong></td>
              <td><span className="v">{computed.area}</span> м²</td>
              <td><span className="v">{computed.totalPrice}</span> ₪</td>
            </tr>
          </tbody>
        </table>

        <div className="note-box" style={{fontSize:'0.75rem', lineHeight:'1.3', padding:'6px 12px'}}>
          Цены без НДС, ориентировочные. Основаны на размерах клиента. Окончательная цена — после замера. Цена за м² фиксируется.
        </div>

        <div className="guarantee-box" style={{marginTop:'6px', padding:'8px 16px', display:'flex', alignItems:'center', gap:'10px'}}>
          <h5 style={{whiteSpace:'nowrap'}}>🛡️ Гарантия</h5>
          <p style={{fontSize:'0.78rem', lineHeight:'1.35', margin:0}}>5 лет на систему и монтаж (кроме стекла). Действует при нормальной эксплуатации и надлежащем обслуживании.</p>
        </div>
      </div>

      <div style={{flex:1}}></div>

      <div className="pg-footer">
        <span className="fb">Modernbuilding</span>
        <span className="fc">Клиент: <span className="v">{data.clientName || '—'}</span></span>
        <span className="fn">3</span>
      </div>
    </div>
  );
}
