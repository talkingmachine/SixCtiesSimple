import { useState } from 'react';
import { Offer } from '../../types/offerTypes';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  cityOffers: Offer[];
  maxOffers?: number;
}

function OffersList ({cityOffers, maxOffers}:OfferListProps):JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState(cityOffers.length ? cityOffers[0].id : -1);

  if (maxOffers) {
    return (
      <>
        {cityOffers.slice(0, maxOffers).map((offer) => (<MainPageCard key={offer.id} offerData={offer} setActiveOfferId={setActiveOfferId}/>))}
      </>);
  }

  return (
    <>
      {cityOffers.map((offer) => (<MainPageCard key={offer.id} offerData={offer} setActiveOfferId={setActiveOfferId}/>))}
    </>);
}

export default OffersList;
