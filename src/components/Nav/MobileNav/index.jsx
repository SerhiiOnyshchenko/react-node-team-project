import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import BurgerMenuToggle from '../../BurgerMenuToggle';
import { NavLink } from 'react-router-dom';
import s from './index.module.css';
import UserNav from 'components/UserNav';
import AuthNav from 'components/AuthNav';

const itemsNav = [
  { href: '/news', title: 'News' },
  { href: '/notices', title: 'Find pet' },
  { href: '/friends', title: 'Our friend' },
];

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLoggedIn = true;

  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <nav className={s.navWrapper}>
          {isMobile && (
            <div className={s.authWrapper}>
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
