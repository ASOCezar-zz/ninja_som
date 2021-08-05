import './styles.scss';

export const FormNewsletter = () => {
  return (
    <div className="formNewsletter" role="form">
      <div className="formTitle" role="title">
        <span>
          ASSINE NOSSO <strong>NEWSLETTER</strong> <br /> <small> E RECEBA NOVIDADES E PROMOCÕES </small>
        </span>
      </div>
      <div className="formInputs">
        <input type="text" placeholder="SEU NOME" className="inputName" />
        <input type="text" placeholder="SEU E-MAIL" className="inputEmail" />
      </div>
      <div className="formSubmitButton">
        <span> ENVIAR </span>
      </div>
    </div>
  );
};
