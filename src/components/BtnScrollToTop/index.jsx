import React, { useRef } from 'react';
import s from './index.module.css';

export default function BtnScrollToTop() {
  const buttonScrollToTop = useRef();
  window.onscroll = () => scrollToTopFunction();

  function scrollToTopFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      buttonScrollToTop.current.style.display = 'block';
    } else {
      buttonScrollToTop.current.style.display = 'none';
    }
  }

  const onClickBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      ref={buttonScrollToTop}
      id="BtnScrollToTop"
      onClick={onClickBtn}
      type="button"
      className={s.Btn}
    ></button>
  );
}
