import logo from '../../images/logo.png'
import s from './index.module.css';

export default function Logo() {
  return (
    <div className={s.logoWrapper}>
      <img src={logo} alt="logo" aria-label='logo' />
    </div>
  )
}