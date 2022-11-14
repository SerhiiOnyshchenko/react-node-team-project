import { NavLink } from 'react-router-dom';
import Container from '../../Container';
import AuthNav from 'components/AuthNav';
import UserNav from 'components/UserNav';
import s from './index.module.css';

const itemsNav = [
  { href: '/news', title: 'News' },
  { href: '/notices', title: 'Find pet' },
  { href: '/friends', title: 'Our friend' },
];

export default function MobileNav() {
  const isLoggedIn = false;
  return (
    <Container>
      <nav className={s.navWrapper}>
        {isLoggedIn ? <AuthNav /> : <UserNav />}
        <ul className={s.linkWrapper}>
          {itemsNav.map(({ href, title }) => (
            <NavLink
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
    </Container>
  );
}
