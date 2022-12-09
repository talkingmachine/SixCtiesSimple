import { TailSpin } from 'react-loader-spinner';

const LoadingSpinner = ():JSX.Element => (
  <TailSpin
    height="80"
    width="80"
    color="#4481c3"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: '50%',
    }}
    wrapperClass=""
    visible
  />);

export default LoadingSpinner;
