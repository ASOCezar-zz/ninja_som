import './styles.scss';

import profileCommentsImage from '../../templates/images/profileComments_image.svg';
import { Comment } from '../Comment';
import leftArrowIcon from '../../templates/icons/comments_leftArrow_icon.svg';
import rightArrowIcon from '../../templates/icons/comments_rightArrow_icon.svg';

export const WrapperComments = () => {
  return (
    <div className="wrapperComments">
      <img className="arrow" src={leftArrowIcon} />
      <Comment
        image={profileCommentsImage}
        name="Felipe Salmin"
        profession="Designer"
        text="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’"
      />
      <img className="arrow" src={rightArrowIcon} />
    </div>
  );
};
