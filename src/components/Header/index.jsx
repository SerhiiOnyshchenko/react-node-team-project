import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import Cointainer from '../Container';
import s from './index.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Cointainer>
        <div className={s.headerList}>
          <Logo />
          <Navigation />
        </div>
      </Cointainer>
    </header>
  );
}
