import Nav from 'components/Nav';
import AuthNav from 'components/AuthNav';
import UserNav from 'components/UserNav';
import s from './index.module.css';

export default function Navigation() {
  return (
    <div className={s.wrapper}>
      <Nav />
      <AuthNav />
      <UserNav />
    </div>
  );
}
