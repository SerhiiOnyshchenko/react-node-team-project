import React from 'react';
import s from './index.module.css';

export default function BtnScrollToTop() {
  const buttonScrollToTop = document.getElementById('BtnScrollToTop');
  window.onscroll = () => scrollToTopFunction();

  function scrollToTopFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      buttonScrollToTop.style.display = 'block';
    } else {
      buttonScrollToTop.style.display = 'none';
    }
  }

  const onClickBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="BtnScrollToTop"
      onClick={onClickBtn}
      type="button"
      className={s.Btn}
    ></button>
  );
}
