import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Nav from 'components/Nav';
import AuthNav from 'components/AuthNav';
import UserNav from 'components/UserNav';
import MobileNav from 'components/Nav/MobileNav';
import ToggleTheme from 'components/ToggleTheme';
import s from './index.module.css';


export default function Navigation() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <div className={s.wrapper}>
        {!isTablet && <Nav />} 
        <ToggleTheme/>
        {!isMobile && (isLoggedIn ? <UserNav /> : <AuthNav />)}
        {isTablet && <MobileNav />}
      </div>
    </>
  );
}
