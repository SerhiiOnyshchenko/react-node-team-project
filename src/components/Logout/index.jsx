import s from './index.module.css';
import { ReactComponent as Logo } from '../../images/svg/logout.svg';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { useState } from 'react';
import ModalPage from 'pages/ModalPage';
import ModalSuccess from 'components/ModalSuccess';

export default function Logout() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={s.button}
        type="button"
        onClick={() => setShowModal(true)}
        aria-label="Logout"
      >
        <Logo className={s.logo} />
        Logout
      </button>
      {showModal && (
        <ModalPage onClose={() => setShowModal(false)}>
          <ModalSuccess
            onDispatch={() => dispatch(authOperations.logOut())}
            onClose={() => setShowModal(false)}
          />
        </ModalPage>
      )}
    </>
  );
}
