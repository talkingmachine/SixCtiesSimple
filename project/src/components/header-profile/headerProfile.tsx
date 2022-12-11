import { Link } from 'react-router-dom';
import RouterPaths from '../../const/routerPaths';
import { useDispatchTyped, useSelectorTyped } from '../../hooks/typedWrappers';
import { logoutAction } from '../../store/api-actions';
import { authorizationStatusSelector, userDataSelector } from '../../store/selectors';

const HeaderProfile = (): JSX.Element => {
  const isAuthorized = useSelectorTyped(authorizationStatusSelector);
  const userData = useSelectorTyped(userDataSelector);
  const dispatch = useDispatchTyped();

  if (isAuthorized) {
    const signOutClickHandle = () => {
      dispatch(logoutAction());
    };

    return (
      <>
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">{userData.email}</span>
          </div>
        </li>
        <li className="header__nav-item">
          <Link onClick={signOutClickHandle} className="header__nav-link" to={RouterPaths.login}>
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </>
    );
  }

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={RouterPaths.login}>
        <div className="header__avatar-wrapper user__avatar-wrapper" />
        <span className="header__login">Sign in</span>
      </Link>
    </li>);
};

export default HeaderProfile;
