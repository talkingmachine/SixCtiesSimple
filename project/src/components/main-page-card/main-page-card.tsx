import { Link } from 'react-router-dom';
import RouterPaths from '../../const/routerPaths';
import { useDispatchTyped } from '../../hooks/typedWrappers';
import { setActiveOfferId } from '../../store/action';
import { Offer } from '../../types/offerTypes';
import { firstLetterToUpperCase, parseRatingToStars } from '../../utils/utils'; //возвращать скролл в начальное положение

type MainPageCardProps = {
  offerData: Offer;
}

function MainPageCard ({offerData}:MainPageCardProps):JSX.Element {

  const {type, title, price, rating, id, previewImage} = offerData;
  const dispatch = useDispatchTyped();

  const mouseEnterHandle = () => {
    dispatch(setActiveOfferId({activeOfferId: id}));
  };

  const mouseLeaveHandle = () => {
    dispatch(setActiveOfferId({activeOfferId: -1}));
  };

  return (
    <article onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle} className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={previewImage} alt="Place" width={260} height={200} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: parseRatingToStars(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${RouterPaths.offer}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{firstLetterToUpperCase(type)}</p>
      </div>
    </article>);
}

export default MainPageCard;
