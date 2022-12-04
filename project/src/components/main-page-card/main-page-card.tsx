import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import RouterPaths from '../../const/router-paths';
import apartment02Image from '../../img/apartment-02.jpg';
import { Offer } from '../../types/offerTypes';
import { firstLetterToUpperCase, parseRatingToStars } from '../../utils/utils';

type MainPageCardProps = {
  offerData: Offer;
  setActiveOfferId: Dispatch<SetStateAction<number>>;
}

function MainPageCard ({offerData, setActiveOfferId}:MainPageCardProps):JSX.Element {

  const {type, title, price, rating, id} = offerData;

  const mouseOverHandle = () => {
    setActiveOfferId(id);
  };

  const mouseLeaveHandle = () => {
    setActiveOfferId(-1);
  };

  return (
    <article onMouseOver={mouseOverHandle} onMouseLeave={mouseLeaveHandle} className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={apartment02Image} alt="Place" width={260} height={200} />
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
