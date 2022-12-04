import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterPaths from '../../const/router-paths';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import store from '../../store';
import { PropertyData } from '../../types/offerTypes';
import NotFoundPage from '../not-found-page/not-found-page';
const LoginPage = React.lazy(() => import ('../../pages/login-page/login-page'));

type AppProps = {
  rentalOfferCount:number;
  propertyData:PropertyData;
  locationNamesList: string[];
}

function App({rentalOfferCount, propertyData, locationNamesList}:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={RouterPaths.main} element={<MainPage locationNamesList={locationNamesList} rentalOfferCount={rentalOfferCount} propertyData={propertyData}/>} />
          <Route path={RouterPaths.login} element={<Suspense fallback={<span>Loading...</span>}><LoginPage/></Suspense>} />
          <Route path={`${RouterPaths.offer}:id`} element={<PropertyPage propertyData={propertyData}/>} />
          <Route path={'*'} element={<NotFoundPage/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
