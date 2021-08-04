import './styles.scss';
import PropTypes from 'prop-types';

export const NewItem = ({ image, text1, text2 }) => {
  return (
    <div className="newItem">
      <img src={image} alt={text1 + text2} className="cardImage" />
      <div className="cardText">
        <span className="news"> NOVIDADES </span>
        <hr />
        <div className="lines">
          <span className="firstLine">{text1}</span>
          <span className="secondLine">{text2}</span>
        </div>
        <div className="checkButton">
          <p>CONFIRA</p>
        </div>
      </div>
    </div>
  );
};

NewItem.propTypes = {
  image: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
