import React from 'react';
import s from './index.module.css';

export default function Button({ text, active = false, smole = false }) {
  return (
    <div
      className={active ? s.Btn_active : s.Btn}
      style={
        smole
          ? {
              height: '32px',
              fontSize: '14px',
              width: 'auto',
              padding: '10px 28px',
            }
          : {}
      }
    >
      {text}
    </div>
  );
}
