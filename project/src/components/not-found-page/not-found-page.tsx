import React from 'react';
import { Link } from 'react-router-dom';
import RouterPaths from '../../const/router-paths';

function NotFoundPage ():JSX.Element {
  return (
    <React.Fragment>
      <h1>404 Not Found</h1>
      <p>I dunno what you expected, but it ain{'\''}t here. </p>
      <Link to={RouterPaths.main}>Go to start</Link>
    </React.Fragment>);
}

export default NotFoundPage;
