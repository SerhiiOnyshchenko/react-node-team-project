import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './index.module.css';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddNoticeButton() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const text = 'Add pet';
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleModalToggle = () => {
    if (!isLoggedIn) return toast.info('You must be logged in');
  };
  return (
    <div className={s.btnWrapper}>
      {!isMobile && text}
      <button type="button" className={s.btn} onClick={handleModalToggle}>
        <Plus className={s.icon} />
        {isMobile && text}
      </button>
      <ToastContainer />
    </div>
  );
}
