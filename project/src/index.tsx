import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import createCommentsList from './mocks/comments';
import createOffersList from './mocks/offers';
import { PropertyData } from './types/types';

const propertyData:PropertyData = {
  commentsList: createCommentsList(),
  offersList: createOffersList()
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App rentalOfferCount={666} propertyData={propertyData}/>
  </React.StrictMode>,
);
