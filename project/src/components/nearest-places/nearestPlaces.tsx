import { Offer } from '../../types/offerTypes';
import OffersList from '../offers-list/offers-list';

type NearestPlacesProps = {
  nearbyOffers: Offer[];
}

function NearestPlaces({nearbyOffers}: NearestPlacesProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OffersList cityOffers={nearbyOffers}/>
      </div>
    </section>
  );
}

export default NearestPlaces;
