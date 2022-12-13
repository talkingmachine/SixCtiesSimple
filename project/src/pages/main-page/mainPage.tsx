import classNames from 'classnames';
import { Link } from 'react-router-dom';
import CitiesEmpty from '../../components/cities-empty/citiesEmpty';
import Cities from '../../components/cities/cities';
import HeaderProfile from '../../components/header-profile/headerProfile';
import LoadingSpinner from '../../components/loading-spinner/loadingSpinner';
import LocationsList from '../../components/locations-list/locationsList';
import RouterPaths from '../../const/routerPaths';

import { useSelectorTyped } from '../../hooks/typedWrappers';
import headerLogo from '../../img/logo.svg';
import { currentCityOffersListSelector, isDataLoadingSelector } from '../../store/selectors';

type MainPageProps = {
  locationNamesList: string[];
}

function MainPage ({locationNamesList}:MainPageProps):JSX.Element {
  const isDataLoading = useSelectorTyped(isDataLoadingSelector);
  const cityOffers = useSelectorTyped(currentCityOffersListSelector);
  const isCityOffersExist = cityOffers.length !== 0;

  if (isDataLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <div className="page page--gray page--main">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={RouterPaths.main}>
                <img className="header__logo" src={headerLogo} alt="6 cities logo" width={81} height={41} />
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
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty': !isCityOffersExist})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList locationNamesList={locationNamesList}/>
        </div>
        <div className="cities">
          {isCityOffersExist ? <Cities cityOffers={cityOffers}/> : <CitiesEmpty/>}
        </div>
      </main>
    </div>);
}

export default MainPage;
