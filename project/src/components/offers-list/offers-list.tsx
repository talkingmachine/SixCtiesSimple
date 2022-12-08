import { Offer } from '../../types/offerTypes';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  cityOffers: Offer[];
  maxOffers?: number;
}

function OffersList ({cityOffers, maxOffers}:OfferListProps):JSX.Element {

  if (maxOffers) {
    return (
      <>
        {cityOffers.slice(0, maxOffers).map((offer) => (<MainPageCard key={offer.id} offerData={offer}/>))}
      </>);
  }

  return (
    <>
      {cityOffers.map((offer) => (<MainPageCard key={offer.id} offerData={offer}/>))}
    </>);
}

export default OffersList;
