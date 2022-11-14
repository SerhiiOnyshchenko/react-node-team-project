import s from './index.module.css';
import { ReactComponent as Logo } from '../../images/svg/logout.svg';

export default function Logout() {
  return (
    <button className={s.button} type="button">
      <Logo className={s.logo} />
      Logout
    </button>
  );
}
