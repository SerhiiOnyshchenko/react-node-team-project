import s from './index.module.css';
import { ReactComponent as LogoSvg } from '../../images/svg/petly-logo.svg';

export default function Logo() {
  return (
    <div className={s.logoWrapper}>
      <LogoSvg />
    </div>
  );
}
