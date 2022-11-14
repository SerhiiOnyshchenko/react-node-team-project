import { useMediaQuery } from 'react-responsive';
import Nav from 'components/Nav';
import AuthNav from 'components/AuthNav';
import UserNav from 'components/UserNav';
import MobileNav from 'components/Nav/MobileNav';
import s from './index.module.css';

export default function Navigation() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });
  const isLoggedIn = false;

  return (
    <>
      <div className={s.wrapper}>
        {!isTablet && <Nav />}
        {/* {!isMobile && <UserNav />} */}
        {!isMobile && <AuthNav />}
        {/* {isLoggedIn ? <UserNav /> : <AuthNav />} */}
        {isTablet && <MobileNav />}
      </div>
    </>
  );
}
