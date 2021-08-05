import './styles.scss';
import { useContext, useEffect, useRef } from 'react';
import { SelectedInstrumentContext } from '../../../contexts/SelectedInstrumentContext/context';
import closeModalIcon from '../../../public/icons/closeModal_icon.svg';
import seeMoreIcon from '../../../public/icons/seeMore_arrow_icon.svg';
import { IsModalOpenContext } from '../../../contexts/IsModalOpenContext/context';

export const WrapperModal = () => {
  const selectedInstrumentContext = useContext(SelectedInstrumentContext);
  const { selectedInstrument } = selectedInstrumentContext;

  const isModalOpenContext = useContext(IsModalOpenContext);
  const { isModalOpen, setIsModalOpen } = isModalOpenContext;

  const divModal = useRef();

  useEffect(() => {
    isModalOpen ? divModal.current.classList.add('active') : divModal.current.classList.remove('active');
  }, [isModalOpen]);

  return (
    <div ref={divModal} className="wrapperModal">
      <div className="modalBackground"></div>
      <div className="modal">
        <div className="closeModalIcon">
          <img src={closeModalIcon} onClick={() => setIsModalOpen(false)} />
        </div>
        <div className="instrumentPhotoModal">
          <img alt={selectedInstrument.name} src={selectedInstrument.photo} />
        </div>
        <div className="instrumentInfoWrapperModal">
          <div className="instrumentInfo">
            <span className="instrumentName"> {selectedInstrument.productName}</span>
            <span className="instrumentPrice">
              {selectedInstrument.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <span className="instrumentDescription"> {selectedInstrument.descriptionShort}</span>
          </div>
          <span className="seeMoreDetails">
            Veja mais detalhes do produto <img src={seeMoreIcon} />
          </span>
          <div className="hrDiv">
            <hr />
          </div>
          <div className="addToCartButton">
            <span> Adicionar ao carrinho </span>
          </div>
        </div>
      </div>
    </div>
  );
};
