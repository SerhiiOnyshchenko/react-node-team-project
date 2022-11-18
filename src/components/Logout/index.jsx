import s from './index.module.css';
import { ReactComponent as Logo } from '../../images/svg/logout.svg';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <button
      className={s.button}
      type="button"
      onClick={() => dispatch(authOperations.logOut())}
    >
      <Logo className={s.logo} />
      Logout
    </button>
  );
}
