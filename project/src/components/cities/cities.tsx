import { useState } from 'react';

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

  const toggleSortList = () => {
    setIsSortListOpened((prevState) => !prevState);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
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
          <SortOptions isOpened={isSortListOpened} currentSortType={offersSortType} setOffersSortType={setOffersSortType} />
        </form>
        <div className="cities__places-list places__list tabs__content">
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
