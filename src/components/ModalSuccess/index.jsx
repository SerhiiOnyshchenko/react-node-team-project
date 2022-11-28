import React from 'react';
import s from './index.module.css';

export default function ModalSuccess({ onDispatch, onClose }) {
  return (
    <div className={s.AccessContainer}>
      <h2 className={s.AccessTitle}>Are you sure?</h2>
      <div className={s.BttonsWrapper}>
        <button
          type="button"
          className={s.Btn}
          onClick={() => {
            onDispatch();
            onClose();
          }}
        >
          Yes
        </button>
        <button type="button" className={s.Btn} onClick={() => onClose()}>
          No
        </button>
      </div>
    </div>
  );
}
