import React, { useRef } from 'react';
import s from './index.module.css';
import { ReactComponent as ArrowUp } from '../../images/svg/arrowUp.svg';

export default function BtnScrollToTop() {
  const buttonScrollToTop = useRef();
  window.onscroll = () => scrollToTopFunction();

  function scrollToTopFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      buttonScrollToTop.current.style.display = 'flex';
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
      name="Scroll to top"
      aria-label="Scroll to top"
    >
      <ArrowUp />
    </button>
  );
}
