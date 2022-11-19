import { useState } from 'react';
import { PropertyData } from '../../types/types';
import MainPageCard from '../main-page-card/main-page-card';

type OfferListProps = {
  propertyData: PropertyData;
}

function OffersList ({propertyData}:OfferListProps):JSX.Element {
  const offersList = propertyData.offersList;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState(offersList[0].id);

  return (
    <>
      {offersList.map((item) => (<MainPageCard key={item.id} offerData={item} setActiveOfferId={setActiveOfferId}/>))}
    </>);
}

export default OffersList;
