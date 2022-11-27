import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './contactsModals.module.css';

export default function ContactsModal({ children, onClose }) {
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
      <div className={s.Content}>{children}</div>
    </div>,
    modalRoot.current
  );
}
