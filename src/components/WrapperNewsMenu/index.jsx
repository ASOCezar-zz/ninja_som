import { NewItem } from '../NewItem';
import './styles.scss';
import musicalInstrumentsImage from '../../templates/images/musicalInstruments_image.svg';
import professionalAudioImage from '../../templates/images/professionalAudio_image.svg';

export const WrapperNewsMenu = () => {
  return (
    <div className="wrapperNewsMenu">
      <NewItem image={professionalAudioImage} text1="ÁUDIO" text2="PROFISSIONAL" />
      <NewItem image={musicalInstrumentsImage} text1="INSTRUMENTOS" text2="MUSICAIS" />
    </div>
  );
};
