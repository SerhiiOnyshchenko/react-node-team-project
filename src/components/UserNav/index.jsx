import s from './index.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as AccountSvg } from '../../images/svg/account.svg';

export default function UserNav() {
  return (
    <button type="button" className={s.btnBg}>
      <NavLink to="/user" className={s.btn}>
        <AccountSvg className={s.icon} />
        Account
      </NavLink>
    </button>
  );
}
