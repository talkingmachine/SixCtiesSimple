import { Offer } from '../../types/offerTypes';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  cityOffers: Offer[];
}

function OffersList ({cityOffers}:OfferListProps):JSX.Element {
  return ( // В типе "Element[]" отсутствуют следующие свойства из типа "ReactElement<any, any>": type, props, key
    <>
      {cityOffers.map((offer) => (<MainPageCard key={offer.id} offerData={offer}/>))}
    </>);
}

export default OffersList;
