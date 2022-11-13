import Nav from 'components/Nav';
import AuthNav from 'components/AuthNav';
import s from './index.module.css';

export default function Navigation() {
  return (
    <div className={s.wrapper}>
      <Nav />
      <AuthNav />
    </div>
  );
}
