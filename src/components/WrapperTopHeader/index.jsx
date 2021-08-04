import { TopHeaderComponent } from '../TopHeaderComponent';
import './styles.scss';

import lockIcon from '../../templates/icons/lock_icon.svg';
import exchangeIcon from '../../templates/icons/exchange_icon.svg';
import percentageIcon from '../../templates/icons/percentage_icon.svg';
import truckIcon from '../../templates/icons/truck_icon.svg';

export const WrapperTopHeader = () => {
  return (
    <div className="wrapperTopHeader">
      <TopHeaderComponent className="securityBuy" text="COMPRA 100% SEGURA" icon={lockIcon} />
      |
      <TopHeaderComponent className="freeExchange" text="1 TROCA GRÁTIS" icon={exchangeIcon} />
      |
      <TopHeaderComponent className="percentage" text="5X SEM JUROS" icon={percentageIcon} />
      |
      <TopHeaderComponent className="delivery" text="ENTREGAS EM TODO BRASIL" icon={truckIcon} />
    </div>
  );
};
