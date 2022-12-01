import { useState } from 'react';
import { Offer } from '../../types/offerCommentTypes';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  offersList: Offer[];
  maxOffers?: number;
}

function OffersList ({offersList, maxOffers}:OfferListProps):JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState(offersList[0].id);
  if (maxOffers) {
    return (
      <>
        {offersList.slice(0, maxOffers).map((item) => (<MainPageCard key={item.id} offerData={item} setActiveOfferId={setActiveOfferId}/>))}
      </>);
  }

  return (
    <>
      {offersList.map((item) => (<MainPageCard key={item.id} offerData={item} setActiveOfferId={setActiveOfferId}/>))}
    </>);

}

export default OffersList;
