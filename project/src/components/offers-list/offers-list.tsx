import { useState } from 'react';
import { useSelectorTyped } from '../../hooks/typedWrappers';
import { Offer } from '../../types/offerTypes';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  offersList: Offer[];
  maxOffers?: number;
}

function OffersList ({offersList, maxOffers}:OfferListProps):JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState(offersList[0].id);
  const selectedCity = useSelectorTyped((state)=> state.locationName);
  const cityOffers = offersList.filter((offer)=>offer.city.name === selectedCity);

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
