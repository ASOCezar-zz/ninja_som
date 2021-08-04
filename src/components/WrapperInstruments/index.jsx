import { Instrument } from '../Instrument';
import './styles.scss';
import guitarsImage from '../../templates/icons/guitars_image.svg';
import microphoneImage from '../../templates/icons/microphones_image.svg';
import soundTableImage from '../../templates/icons/soundTable_image.svg';
import clavierImage from '../../templates/icons/clavier_image.svg';
import guitar1Image from '../../templates/icons/guitar1_image.svg';
import drumsImage from '../../templates/icons/drums_image.svg';

export const WrapperInstruments = () => {
  return (
    <div className="wrapperInstruments">
      <Instrument image={guitarsImage} name="GUITARRAS" />
      <Instrument image={microphoneImage} name="MICROFONES" />
      <Instrument image={soundTableImage} name="MESAS DE SOM" />
      <Instrument image={clavierImage} name="TECLADOS" />
      <Instrument image={guitar1Image} name="VIOLÕES" />
      <Instrument image={drumsImage} name="BATERIAS" />
    </div>
  );
};
