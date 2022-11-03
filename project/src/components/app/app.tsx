import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalOfferCount: number;
}

function App(props:AppProps): JSX.Element {
  return <MainPage rentalOfferCount={props.rentalOfferCount}/>;
}

export default App;
