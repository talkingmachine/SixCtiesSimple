import logoImage from '../../img/logo.svg';
import roomImage from '../../img/room.jpg';
import apartment01Image from '../../img/apartment-01.jpg';
import apartment02Image from '../../img/apartment-02.jpg';
import apartment03Image from '../../img/apartment-03.jpg';
import studio01Image from '../../img/studio-01.jpg';
import { Link, useParams } from 'react-router-dom';
import RouterPaths from '../../const/routerPaths';
import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import ReviewsList from '../../components/reviews-list/reviewsList';
import Map from '../../components/map/map';
import { convertOffersToPoints } from '../../utils/utils';
import NearestPlaces from '../../components/nearest-places/nearestPlaces';
import { useDispatchTyped, useSelectorTyped } from '../../hooks/typedWrappers';
import { authorizationStatusSelector, currentOfferSelector, isDataLoadedSelector, nearbyOffersSelector, offersListSelector} from '../../store/selectors';
import HeaderProfile from '../../components/header-profile/headerProfile';
import { fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyOffersAction } from '../../store/api-actions';
import NotFoundPage from '../not-found-page/not-found-page';
import { useEffect } from 'react';
import { Offer } from '../../types/offerTypes';


function PropertyPage ():JSX.Element {
  const offerId = useParams().id;
  const dispatch = useDispatchTyped();

  useEffect(() => {
    if (offerId) {
      dispatch(fetchCurrentOfferAction({offerId}));
      dispatch(fetchCommentsAction({offerId}));
      dispatch(fetchNearbyOffersAction({offerId}));
    }
  }, [dispatch, offerId]);

  const currentOffer = useSelectorTyped(currentOfferSelector);
  const nearbyOffers = useSelectorTyped(nearbyOffersSelector);
  const offersList = useSelectorTyped(offersListSelector);
  const isLoaded = useSelectorTyped(isDataLoadedSelector);
  const isAuthorized = useSelectorTyped(authorizationStatusSelector);

  if(isLoaded && !offersList.some((offer: Offer) => String(offer.id) === offerId) ) {
    return <NotFoundPage/>;
  }

  return (
    <div className="page">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={RouterPaths.main}>
                <img className="header__logo" src={logoImage} alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <HeaderProfile/>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src={roomImage} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={apartment01Image} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={apartment02Image} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={apartment03Image} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={studio01Image} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={apartment01Image} alt="Studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
              Beautiful &amp; luxurious studio at great location
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
              Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
              3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
              Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What{'\''}s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">
                Wi-Fi
                  </li>
                  <li className="property__inside-item">
                Washing machine
                  </li>
                  <li className="property__inside-item">
                Towels
                  </li>
                  <li className="property__inside-item">
                Heating
                  </li>
                  <li className="property__inside-item">
                Coffee machine
                  </li>
                  <li className="property__inside-item">
                Baby seat
                  </li>
                  <li className="property__inside-item">
                Kitchen
                  </li>
                  <li className="property__inside-item">
                Dishwasher
                  </li>
                  <li className="property__inside-item">
                Cabel TV
                  </li>
                  <li className="property__inside-item">
                Fridge
                  </li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={currentOffer?.host.avatarUrl} alt="Host avatar" width={74} height={74} />
                  </div>
                  <span className="property__user-name">
                Angelina
                  </span>
                  <span className="property__user-status">
                Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the currentCity comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{5}</span></h2>
                <ReviewsList/>
                {isAuthorized ? <NewCommentForm id={offerId}/> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map points={convertOffersToPoints(nearbyOffers)}/>
          </section>
        </section>
        <div className="container">
          <NearestPlaces nearbyOffers={nearbyOffers}/>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
