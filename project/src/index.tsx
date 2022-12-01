import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import getCommentsList from './mocks/comments';
import getOffersList from './mocks/offers';
import { PropertyData } from './types/offerCommentTypes';

const propertyData:PropertyData = {
  commentsList: getCommentsList,
  offersList: getOffersList
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalOfferCount={propertyData.offersList.length} propertyData={propertyData}/>
  </React.StrictMode>,
);
