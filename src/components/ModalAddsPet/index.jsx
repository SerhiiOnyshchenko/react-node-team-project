import s from './index.module.css';
import ModalPage from 'pages/ModalPage';

export default function ModalAddsPet() {
  return (
    <>
      <ModalPage>
        <div className={s.modal}></div>
      </ModalPage>
    </>
  );
}
