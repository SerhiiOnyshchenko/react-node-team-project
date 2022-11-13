import { NavLink } from 'react-router-dom';
import Button from '../Button';
import s from './index.module.css';

const itemsNav = [
  { href: '/login', text: 'Login' },
  { href: '/register', text: 'Registration' },
];

export default function AuthNav() {
  return (
    <ul className={s.list}>
      {itemsNav.map(({ href, text }) => (
        <li className={s.item} key={href}>
          <NavLink to={href}>
            <Button text={text} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
