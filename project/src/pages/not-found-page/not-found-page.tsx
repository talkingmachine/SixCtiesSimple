import { Link } from 'react-router-dom';
import RouterPaths from '../../const/routerPaths';

function NotFoundPage ():JSX.Element {
  return (
    <div style={{marginLeft: '10px', marginTop: '10px'}}>
      <h1>404 Not Found</h1>
      <p>I dunno what you expected, but it ain{'\''}t here. </p>
      <Link to={RouterPaths.main}>Go to start</Link>
    </div>);
}

export default NotFoundPage;
