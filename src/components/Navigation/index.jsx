import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Nav from 'components/Nav';
import AuthNav from 'components/AuthNav';
import UserNav from 'components/UserNav';
import MobileNav from 'components/Nav/MobileNav';
import s from './index.module.css';
import Donate from 'components/Donate';

export default function Navigation() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <div className={s.wrapper}>
        {!isTablet && <Nav />}
        {!isMobile && <Donate />}
        {!isMobile && (isLoggedIn ? <UserNav /> : <AuthNav />)}
        {isTablet && <MobileNav />}
        {isMobile && <Donate />}
      </div>
    </>
  );
}
