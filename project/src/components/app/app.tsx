import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterPaths from '../../const/routerPaths';
import MainPage from '../../pages/main-page/mainPage';
import store from '../../store';
import LoadingSpinner from '../loading-spinner/loadingSpinner';
const PropertyPage = lazy(() => import ('../../pages/property-page/propertyPage'));
const NotFoundPage = lazy(() => import ('../../pages/not-found-page/notFoundPage'));
const LoginPage = lazy(() => import ('../../pages/login-page/loginPage'));

type AppProps = {
  locationNamesList: string[];
}

function App({locationNamesList}:AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={RouterPaths.main} element={<MainPage locationNamesList={locationNamesList}/>} />
          <Route path={RouterPaths.login} element={<Suspense fallback={<LoadingSpinner/>}><LoginPage/></Suspense>} />
          <Route path={`${RouterPaths.offer}:id`} element={<Suspense fallback={<LoadingSpinner/>}><PropertyPage/></Suspense>}/>
          <Route path={RouterPaths.notFound} element={<Suspense fallback={<LoadingSpinner/>}><NotFoundPage/></Suspense>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
