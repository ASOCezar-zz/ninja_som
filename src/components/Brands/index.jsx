import './styles.scss';

import akgLogo from '../../templates/icons/akg_logo.svg';
import rolandLogo from '../../templates/icons/roland_logo.svg';
import bossLogo from '../../templates/icons/boss_logo.svg';
import shureLogo from '../../templates/icons/shure_logo.svg';
import rightArrowIcon from '../../templates/icons/bestBrands_rightArrow_icon.svg';
import leftArrowIcon from '../../templates/icons/bestBrands_leftArrow_icon.svg';

export const Brands = () => {
  return (
    <div className="brands">
      <img src={leftArrowIcon} className="arrow" />
      <img src={akgLogo} alt="AKG Logo Marca" />
      <img src={rolandLogo} alt="Roland Logo Marca" />
      <img src={bossLogo} alt="BOSS Logo Marca" />
      <img src={shureLogo} alt="SHURE Logo Marca" />
      <img src={rightArrowIcon} className="arrow" />
    </div>
  );
};
