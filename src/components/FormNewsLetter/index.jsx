export const FormNewsLetter = () => {
  return (
    <div className="formNewsLetter">
      <div className="formTitle">
        <span>ASSINE NOSSO NEWSLETTER E RECEBA NOVIDADES E PROMOCÕES</span>
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
