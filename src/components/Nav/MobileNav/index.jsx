import { useState } from 'react';
import BurgerMenuToggle from '../../BurgerMenuToggle';
import { NavLink } from 'react-router-dom';
import s from './index.module.css';

const itemsNav = [
  { href: '/news', title: 'News' },
  { href: '/notices', title: 'Find pet' },
  { href: '/friends', title: 'Our friend' },
];

export default function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <BurgerMenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <nav className={s.navWrapper}>
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
