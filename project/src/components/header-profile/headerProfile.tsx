import { Link } from 'react-router-dom';
import AuthorizationStatus from '../../const/authorizationStatus';
import RouterPaths from '../../const/routerPaths';
import { useSelectorTyped } from '../../hooks/typedWrappers';
import { authorizationStatusSelector, userDataSelector } from '../../store/selectors';

const HeaderProfile = (): JSX.Element => {
  const isAuthorized = useSelectorTyped(authorizationStatusSelector) === AuthorizationStatus.Auth;
  const userData = useSelectorTyped(userDataSelector);

  if (isAuthorized) {
    return (
      <>
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">{userData.email}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link" to={RouterPaths.login}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={RouterPaths.login}>
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__login">Sign in</span>
        </Link>
      </li>);
  }
};

export default HeaderProfile;
