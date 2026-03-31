import { KPFormData } from '@/hooks/useKPData';

interface Props {
  data: KPFormData;
}

export function KPPage5Conditions({ data }: Props) {
  return (
    <div className="kp-page" style={{display:'flex', flexDirection:'column', minHeight:'297mm'}}>
      <div className="cond-head">
        <div className="label">Общие условия</div>
        <h2>Условия коммерческого предложения</h2>
      </div>

      <div className="inner" style={{paddingTop:'12px'}}>
        <ul className="cond-list">
          <li>Указанная цена является ориентировочной и основана на размерах и информации, предоставленных заказчиком. Представлены без НДС.</li>
          <li>Окончательная цена будет определена после проведения профессионального замера на объекте представителем компании.</li>
          <li>Цена за м² остаётся неизменной. В случае расхождения фактических размеров с заявленными — общая стоимость корректируется пропорционально.</li>
          <li>Данное КП не является подтверждением заказа. Заказ вступает в силу после подписания формы заказа и/или внесения авансового платежа.</li>
          <li>Внесение аванса считается полным согласием со всеми условиями и является окончательным подтверждением заказа.</li>
          <li>Ориентировочный срок поставки и монтажа — до 15 рабочих дней. Окончательный срок устанавливается после замера и получения аванса.</li>
          <li>В случае особых требований инженера, архитектора, местных органов или особенностей объекта — возможны технические изменения и/или корректировка цены, согласованные с заказчиком заранее.</li>
          <li>Компания не несёт ответственности за задержки по причинам непреодолимой силы: война, чрезвычайные ситуации, забастовки, дефицит сырья.</li>
          <li>Все системы изготавливаются по индивидуальным размерам. Заказ окончателен с момента подтверждения. Отмена невозможна, уплаченные суммы не возвращаются.</li>
          <li>Право собственности на продукцию остаётся за компанией до полной оплаты.</li>
          <li><strong>Предложение действительно 10 дней</strong> с даты выдачи.</li>
        </ul>

        <div className="label" style={{marginBottom:'10px'}}>Условия оплаты</div>
        <div className="pay-steps">
          <div className="pay-step">
            <span className="pct">1 000 ₪</span>
            <div className="when">При подтверждении заказа — до выезда замерщика. Засчитывается в стоимость.</div>
          </div>
          <div className="pay-step">
            <span className="pct">50%</span>
            <div className="when">После замера и утверждения итоговой цены — аванс. Только после этого заказ в производство.</div>
          </div>
          <div className="pay-step">
            <span className="pct">40%</span>
            <div className="when">После завершения производства и подготовки к монтажу.</div>
          </div>
          <div className="pay-step">
            <span className="pct">10%</span>
            <div className="when">После завершения монтажа на объекте клиента.</div>
          </div>
        </div>

        <div className="bank-box">
          <div className="btitle">Реквизиты для оплаты</div>
          ק.ק. בניה מודרנית בע״מ<br/>
          <strong>Банк Апоалим (12)</strong> · Отделение 634 · Счёт: <strong>73390</strong>
        </div>

        <div className="valid-note">
          ⏱ Срок изготовления: <strong>от 21 рабочих дней</strong> с момента окончательного замера и подтверждения заказа, вместо 61 рабочих дней у конкурентов.
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
