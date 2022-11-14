import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Button from '../Button';
import s from './index.module.css';

const itemsNav = [
  { href: '/login', text: 'Login' },
  { href: '/register', text: 'Registration' },
];

export default function AuthNav() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <ul className={s.list}>
      {itemsNav.map(({ href, text }) => (
        <li className={s.item} key={href}>
          <NavLink to={href}>
            {isMobile ? (
              <Button text={text} smole={true} />
            ) : (
              <Button text={text} smole={false} />
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
