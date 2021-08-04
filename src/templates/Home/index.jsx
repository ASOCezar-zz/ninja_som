import { HeaderMenu } from '../../components/HeaderMenu';
import { Carousel } from '../../components/Carousel';
import { WrapperInstruments } from '../../components/WrapperInstruments';
import { WrapperNewsMenu } from '../../components/WrapperNewsMenu';
import { WrapperFeaturedInstruments } from '../../components/WrapperFeaturedInstruments';
import { WrapperModal } from '../../components/WrapperModal';
import { IsModalOpenProvider } from '../../contexts/IsModalOpenContext';
import { WrapperBestBrands } from '../../components/WrapperBestBrands';
import { AboutUs } from '../../components/AboutUs';
import { WrapperComments } from '../../components/WrapperComments';
import { WrapperFooter } from '../../components/WrapperFooter';

export const Home = () => {
  return (
    <div>
      <IsModalOpenProvider>
        <WrapperModal />
        <HeaderMenu />
        <Carousel />
        <WrapperInstruments />
        <WrapperNewsMenu />
        <WrapperFeaturedInstruments />
      </IsModalOpenProvider>
      <WrapperBestBrands />
      <AboutUs />
      <WrapperComments />
      <WrapperFooter />
    </div>
  );
};

export default Home;
