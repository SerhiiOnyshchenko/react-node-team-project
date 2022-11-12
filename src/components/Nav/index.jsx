import { NavLink } from 'react-router-dom';
import s from './index.module.css';

const itemsNav = [
  { href: '/news', title: 'News' },
  { href: '/notices', title: 'Find pet' },
  { href: '/friends', title: 'Our friend' },
];

export default function Nav() {
  return (
    <nav>
      <ul className={s.linkWrapper}>
        {
          <li>
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
          </li>
        }
      </ul>
    </nav>
  );
}
