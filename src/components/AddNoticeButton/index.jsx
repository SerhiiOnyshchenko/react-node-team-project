import { useSelector } from 'react-redux';
import { useState } from 'react';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './index.module.css';
import { ReactComponent as Plus } from '../../images/svg/plus.svg';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';
import AddNoticeModal from 'components/AddNoticeModal';

export default function AddNoticeButton() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const text = 'Add pet';
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) return toast.info('You must be logged in');
    else {
      setOpen(true);
    }
  };
  return (
    <>
      <div className={s.btnWrapper}>
        {!isMobile && text}
        <button type="button" className={s.btn} onClick={handleClick}>
          <Plus className={s.icon} />
          {isMobile && text}
        </button>
      </div>
      {isOpen && <AddNoticeModal />}
    </>
  );
}
