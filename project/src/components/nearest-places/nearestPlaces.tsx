import { Offer } from '../../types/offerCommentTypes';
import OffersList from '../offers-list/offers-list';

type NearestPlacesProps = {
  offersList: Offer[];
  maxOffers: number;
}

function NearestPlaces({offersList, maxOffers}:NearestPlacesProps) {
  const nearestPlacesList = offersList; //logic
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <OffersList offersList={nearestPlacesList} maxOffers={maxOffers}/>
      </div>
    </section>
  );
}

export default NearestPlaces;
