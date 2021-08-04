import { FormNewsLetter } from '../FormNewsLetter';
import { OptionsFooter } from '../OptionsFooter';
import { PaymentSecurityBadges } from '../PaymentSecurityBadges';
import './styles.scss';

export const WrapperFooter = () => {
  return (
    <div className="wrapperFooter">
      <OptionsFooter />
      <PaymentSecurityBadges />
      <FormNewsLetter />
    </div>
  );
};
