import s from './index.module.css';
import { ReactComponent as Svg } from '../../images/svg/donate.svg';

export default function Donate() {
  return (
    <>
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://upaw.org/#/"
        className={s.wrapper}
        title="Donate or Apply for help pets"
      >
        <Svg className={s.icon} />
      </a>
    </>
  );
}
