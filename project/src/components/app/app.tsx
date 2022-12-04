import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterPaths from '../../const/router-paths';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import { PropertyData } from '../../types/offerCommentTypes';
import NotFoundPage from '../not-found-page/not-found-page';
const LoginPage = React.lazy(() => import ('../../pages/login-page/login-page'));

type AppProps = {
  rentalOfferCount:number;
  propertyData:PropertyData;
}

function App({rentalOfferCount, propertyData}:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.main} element={<MainPage rentalOfferCount={rentalOfferCount} propertyData={propertyData}/>} />
        <Route path={RouterPaths.login} element={<Suspense fallback={<span>Loading...</span>}><LoginPage/></Suspense>} />
        <Route path={`${RouterPaths.offer}:id`} element={<PropertyPage propertyData={propertyData}/>} />
        <Route path={'*'} element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
