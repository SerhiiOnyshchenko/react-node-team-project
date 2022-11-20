import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './index.module.css';
import { PropTypes } from 'prop-types';

export default function ModalPage({ children, onClose }) {
  const modalRoot = useRef(document.querySelector('#modal-root'));

  useEffect(() => {
    window.addEventListener('keydown', closeModalEscKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeModalEscKey(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
    if (e.code === 'Escape') {
      onClose();
      window.removeEventListener('keydown', closeModalEscKey);
    }
  }

  return createPortal(
    <div className={s.Backdrop} onClick={closeModalEscKey}>
      <div className={s.Content}>
        <button
          className={s.Btn_close}
          type="button"
          onClick={onClose}
        ></button>
        <h2>Add pet</h2>
        {children}
      </div>
    </div>,
    modalRoot.current
  );
}

ModalPage.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
