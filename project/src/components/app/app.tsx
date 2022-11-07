import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalOfferCount: number;
}

function App({rentalOfferCount}:AppProps): JSX.Element {
  return <MainPage rentalOfferCount={rentalOfferCount}/>;
}

export default App;
