import instagramLogo from '../../templates/icons/instagram_icon.svg';
import facebookLogo from '../../templates/icons/facebook_icon.svg';
import twitterLogo from '../../templates/icons/twitter_icon.svg';

export const OptionsFooter = () => {
  return (
    <div className="optionsFooter">
      <div className="instituitional">
        <a className="optionsFooterTitle">INSTITUCIONAL</a>
        <a className="option">QUEM SOMOS</a>
        <a className="option">NOSSAS LOJAS</a>
      </div>
      <div className="attendance">
        <a className="optionsFooterTitle">ATENDIMENTO</a>
        <a className="option">
          FALE CONOSCO <br /> VENDAS@NINJASOM.COM.BR
        </a>
      </div>
      <div className="help">
        <a className="optionsFooterTitle">AJUDA E SUPORTE</a>
        <a className="option">POLITICA DE PRIVACIDADE</a>
        <a className="option">POLITICA DE TROCAS</a>
        <a className="option">PRAZOS DE ENTREGA</a>
        <a className="option">TERMOS DE USO</a>
      </div>

      <div className="social">
        <img src={instagramLogo} className="socialLogo" />
        <img src={twitterLogo} className="socialLogo" />
        <img src={facebookLogo} className="socialLogo" />
      </div>
    </div>
  );
};
