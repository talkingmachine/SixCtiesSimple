import { useState } from 'react';
import { Offer } from '../../types/types';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  offersList: Offer[];
}

function OffersList ({offersList}:OfferListProps):JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState(offersList[0].id);

  return (
    <>
      {offersList.map((item) => (<MainPageCard key={item.id} offerData={item} setActiveOfferId={setActiveOfferId}/>))}
    </>);
}

export default OffersList;
