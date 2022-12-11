import { Offer } from '../../types/offerTypes';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  cityOffers: Offer[];
}

function OffersList ({cityOffers}:OfferListProps):JSX.Element {
  return (
    <>
      {cityOffers.map((offer) => (<MainPageCard key={offer.id} offerData={offer}/>))}
    </>);
}

export default OffersList;
