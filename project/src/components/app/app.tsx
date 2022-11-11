import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterPaths from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import NotFoundPage from '../not-found-page/not-found-page';

type AppProps = {
  rentalOfferCount: number;
}

function App({rentalOfferCount}:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.main} element={<MainPage rentalOfferCount={rentalOfferCount} />} />
        <Route path={RouterPaths.login} element={<LoginPage/>} />
        <Route path={RouterPaths.offer} element={<PropertyPage/>} />
        <Route path={'*'} element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
