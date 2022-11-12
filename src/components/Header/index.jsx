import Logo from 'components/Logo';
import Cointainer from '../Container'
import s from './index.module.css';

export default function Header() {
  return <header className={s.header}>
    <Cointainer>
      <Logo/>
    </Cointainer>
  </header>
}
