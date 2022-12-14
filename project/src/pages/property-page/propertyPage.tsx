import logoImage from '../../img/logo.svg';
import avatarDefault from '../../img/avatar.svg';
import { Link, useParams } from 'react-router-dom';
import RouterPaths from '../../const/routerPaths';
import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import ReviewsList from '../../components/reviews-list/reviewsList';
import Map from '../../components/map/map';
import { convertOffersToPoints, parseRatingToStars } from '../../utils/utils';
import NearestPlaces from '../../components/nearest-places/nearestPlaces';
import { useDispatchTyped, useSelectorTyped } from '../../hooks/typedWrappers';
import { authorizationStatusSelector, commentsListSelector, currentOfferSelector, isDataLoadingSelector, nearbyOffersSelector, offersListSelector} from '../../store/selectors';
import HeaderProfile from '../../components/header-profile/headerProfile';
import { fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyOffersAction } from '../../store/apiActions';
import NotFoundPage from '../not-found-page/notFoundPage';
import { useEffect } from 'react';
import { Offer } from '../../types/offerTypes';
import classNames from 'classnames';
import { HousingType } from '../../const/housingType';


function PropertyPage ():JSX.Element {
  const {id: offerId} = useParams();
  const dispatch = useDispatchTyped();

  useEffect(() => {
    if (offerId) {
      dispatch(fetchCurrentOfferAction({offerId}));
      dispatch(fetchCommentsAction({offerId}));
      dispatch(fetchNearbyOffersAction({offerId}));
    }
  }, [dispatch, offerId]);

  const currentOffer = useSelectorTyped(currentOfferSelector);
  const commentsList = useSelectorTyped(commentsListSelector);

  const nearbyOffers = useSelectorTyped(nearbyOffersSelector);
  const offersList = useSelectorTyped(offersListSelector);
  const isLoading = useSelectorTyped(isDataLoadingSelector);
  const isAuthorized = useSelectorTyped(authorizationStatusSelector);

  if(isLoading && !offersList.some((offer: Offer) => String(offer.id) === offerId) ) {
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
              {currentOffer?.images.slice(0,6).map((imageUrl) => (
                <div key={imageUrl} className="property__image-wrapper">
                  <img className="property__image" src={imageUrl} alt="Studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer?.isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : null || null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {currentOffer?.title || 'Sorry, offer not found'}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: parseRatingToStars(currentOffer?.rating || 0)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{currentOffer?.rating || 0}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {HousingType(currentOffer ? currentOffer.type : 'none')}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer?.bedrooms || 0} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer?.maxAdults || 0} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{currentOffer?.price || 0}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What{'\''}s inside</h2>
                <ul className="property__inside-list">
                  {currentOffer?.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  )) || ''}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={classNames('property__avatar-wrapper', 'user__avatar-wrapper', {'property__avatar-wrapper--pro' : currentOffer?.host.isPro || false})}>
                    <img className="property__avatar user__avatar" src={currentOffer?.host.avatarUrl || avatarDefault} alt="Host avatar" width={74} height={74} />
                  </div>
                  <span className="property__user-name">
                    {currentOffer?.host.name || 'Sorry, host name not found'}
                  </span>
                  <span className="property__user-status">
                    {currentOffer?.host.isPro ? 'Pro' : null || null}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer?.description || 'Sorry, description not found'}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{commentsList.length}</span></h2>
                <ReviewsList/>
                {isAuthorized ? <NewCommentForm id={offerId} /> : null}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map points={convertOffersToPoints(nearbyOffers)} renderedOnPropertyPage/>
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
