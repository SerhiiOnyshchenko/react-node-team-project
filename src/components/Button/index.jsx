import React from 'react';
import s from './index.module.css';

export default function Button({ text, active = false }) {
  return <div className={active ? s.Btn_active : s.Btn}>{text}</div>;
}
