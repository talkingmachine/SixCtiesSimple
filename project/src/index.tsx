import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { locationNamesList } from './const/locationNamesList';
import store from './store/index';
import { checkAuthAction, fetchOffersAction } from './store/apiActions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction({isAppStarts: true}));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ToastContainer/>
    <App locationNamesList={locationNamesList}/>
  </React.StrictMode>,
);
