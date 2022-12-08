import { Offer } from '../../types/offerTypes';
import OffersList from '../offers-list/offers-list';

type NearestPlacesProps = {
  cityOffers: Offer[];
  maxOffers: number;
}

function NearestPlaces({cityOffers, maxOffers}:NearestPlacesProps) {
  const nearestPlacesList = cityOffers; //logic
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OffersList cityOffers={nearestPlacesList} maxOffers={maxOffers}/>
      </div>
    </section>
  );
}

export default NearestPlaces;
