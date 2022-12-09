import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { locationNamesList } from './const/locationNamesList';
import store from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App locationNamesList={locationNamesList}/>
  </React.StrictMode>,
);
