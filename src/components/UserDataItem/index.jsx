import { ReactComponent as Logo } from '../../images/svg/edit.svg';

import s from './index.module.css';

export default function UserDataItem({ field, value }) {
  return (
    <div className={s.wrapper}>
      <p className={s.field}>{field}:</p>
      <p className={s.value}>{value}</p>
      <button className={s.button} type="button">
        <Logo className={s.logo}></Logo>
      </button>
    </div>
  );
}
