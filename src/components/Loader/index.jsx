import React from 'react';
import s from './index.module.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <div className={s.img}></div>
    </div>
  );
}
