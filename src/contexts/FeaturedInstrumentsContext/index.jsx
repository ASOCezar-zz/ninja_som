import { FeaturedInstrumentsContext } from './context';
import P from 'prop-types';
import { products } from '../../db/featuredInstruments.json';

export const FeaturedInstrumentsProvider = ({ children }) => {
  return <FeaturedInstrumentsContext.Provider value={{ products }}>{children}</FeaturedInstrumentsContext.Provider>;
};

FeaturedInstrumentsProvider.propTypes = {
  children: P.node.isRequired,
};
