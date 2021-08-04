import visaBadge from '../../templates/icons/visa_badge.svg';
import mastercardBadge from '../../templates/icons/mastercard_badge.svg';
import americanExpressBadge from '../../templates/icons/americanExpress_badge.svg';
import socialClubBadge from '../../templates/icons/socialClub_badge.svg';
import boletoBadge from '../../templates/icons/boleto_badge.svg';

export const PaymentSecurityBadges = () => {
  return (
    <div className="paymentSecurityBadges">
      <div className="payment">
        <span> FORMAS DE PAGAMENTO </span>
        <img src={visaBadge} className="paymentBadge" />
        <img src={mastercardBadge} className="paymentBadge" />
        <img src={americanExpressBadge} className="paymentBadge" />
        <img src={socialClubBadge} className="paymentBadge" />
        <img src={boletoBadge} className="paymentBadge" />
      </div>
    </div>
  );
};
