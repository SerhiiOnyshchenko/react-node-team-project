import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import getIsLoggedIn from '../../../redux/auth/auth-selectors';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import BurgerMenuToggle from '../../BurgerMenuToggle';
import UserNav from 'components/UserNav';
import AuthNav from 'components/AuthNav';

import s from './index.module.css';

const itemsNav = [
  { href: '/news', title: 'News' },
  { href: '/notices', title: 'Find pet' },
  { href: '/friends', title: 'Our friend' },
];

export default function MobileNav() {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = true;
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <nav className={s.navWrapper}>
          {isMobile && (
            <div className={s.authWrapper} onClick={() => setOpen()}>
              {isLoggedIn ? <UserNav /> : <AuthNav className={s.centered} />}
            </div>
          )}
          <ul className={s.linkWrapper}>
            {itemsNav.map(({ href, title }) => (
              <NavLink
                onClick={() => setOpen()}
                to={href}
                key={href}
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.active}` : `${s.link}`
                }
              >
                {title}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
