import { useMediaQuery } from 'react-responsive';
// import { useSelector } from 'react-redux';
// import getIsLoggedIn from '../../redux/auth/auth-selectors';
import Nav from 'components/Nav';
import AuthNav from 'components/AuthNav';
import UserNav from 'components/UserNav';
import MobileNav from 'components/Nav/MobileNav';
import s from './index.module.css';

export default function Navigation() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });
  const isLoggedIn = true;
  // const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <div className={s.wrapper}>
        {!isTablet && <Nav />}
        {!isMobile && (isLoggedIn ? <UserNav /> : <AuthNav />)}
        {isTablet && <MobileNav />}
      </div>
    </>
  );
}
