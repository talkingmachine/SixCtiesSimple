import { useState, useRef, useEffect } from 'react';
import { useSelectorTyped } from '../../hooks/typedWrappers';
import { locationNameSelector } from '../../store/selectors';
import { convertOffersToPoints } from '../../utils/utils';
import OffersList from '../offers-list/offers-list';
import SortOptions from '../sort-options/sortOptions';
import Map from '../map/map';
import { Offer } from '../../types/offerTypes';
import { offersSortTypes } from '../../const/sortTypes';

type CitiesProps = {
  cityOffers: Offer[];
}

function Cities ({cityOffers}: CitiesProps):JSX.Element {
  const selectedCity = useSelectorTyped(locationNameSelector);

  const [isSortListOpened, setIsSortListOpened] = useState(false);
  const [offersSortType, setOffersSortType] = useState(offersSortTypes.popular);
  const sortList = useRef<HTMLDivElement>(null);
  const toggleSortList = () => {

    const removeSortListWhenEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSortListOpened(false);
        window.removeEventListener('keydown', removeSortListWhenEsc);
        window.removeEventListener('click', removeSortListWhenClick);
      }
    };

    const removeSortListWhenClick = (e: MouseEvent) => {
      if (sortList.current && !sortList.current.contains(e.target as HTMLElement)) { // click outside the list
        window.removeEventListener('keydown', removeSortListWhenEsc);
        window.removeEventListener('click', removeSortListWhenClick);
        setIsSortListOpened(false);
      }
    };

    setIsSortListOpened((prevState) => {
      if (prevState) { // if not shown but will be
        window.removeEventListener('keydown', removeSortListWhenEsc);
        window.removeEventListener('click', removeSortListWhenClick);

      } else { // if shown but will be removed
        window.addEventListener('keydown', removeSortListWhenEsc);
        setTimeout(() => window.addEventListener('click', removeSortListWhenClick), 200); // otherwise closes immediately
      }
      return !prevState;
    });

  };

  const offersListContainer = useRef<HTMLElement>(null);

  useEffect(()=>{
    if (offersListContainer.current) {
      offersListContainer.current.scrollTo(0, 0);
    }
  }, [cityOffers]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places" ref={offersListContainer}>
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{cityOffers.length} places to stay in {selectedCity}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by </span>
          <span onClick={toggleSortList} className="places__sorting-type" tabIndex={0}>
            {offersSortType}
            <svg className="places__sorting-arrow" width={7} height={4}>
              <use xlinkHref="#icon-arrow-select" />
            </svg>
          </span>
          <div className="sort-list_container" ref={sortList}>
            <SortOptions isOpened={isSortListOpened} currentSortType={offersSortType} setOffersSortType={setOffersSortType} />
          </div>
        </form>
        <div className="cities__places-list places__list tabs__content" >
          <OffersList cityOffers={cityOffers}/>
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map" id="map">
          <Map points={convertOffersToPoints(cityOffers)} renderedOnPropertyPage={false}/>
        </section>
      </div>
    </div>
  );
}

export default Cities;
