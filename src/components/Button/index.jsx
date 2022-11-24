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
              lineHeight: '19px',
              letterSpacing: '0.04em',
              width: 'auto',
              padding: '10px 26px',
            }
          : {}
      }
    >
      {text}
    </div>
  );
}
