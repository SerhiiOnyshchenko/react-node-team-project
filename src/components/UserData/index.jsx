import s from './index.module.css';
import UserDataItem from 'components/UserDataItem';
import { ReactComponent as Logo } from '../../images/svg/camera.svg';
import Logout from 'components/Logout';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useState } from 'react';

export default function UserData() {
  const user = useSelector(authSelectors.getUser);
  const [disBtnEdit, setDisBtnEdit] = useState(false);
  return (
    <div className={s.wrapper}>
      <div className={s.imgBlock}>
        <div className={s.imgWrap}>
          <img
            className={s.image}
            src={user.image}
            alt={user.name}
            width="233"
            height="233"
          />
        </div>
        <button type="button" className={s.editPhoto}>
          <Logo className={s.editPhotoIcon} />
          Edit photo
        </button>
      </div>
      <div className={s.userInfo}>
        <UserDataItem
          field="Name"
          value={user.name}
          disBtnEdit={disBtnEdit}
          setDisBtnEdit={setDisBtnEdit}
        />
        <UserDataItem
          field="Email"
          value={user.email}
          disBtnEdit={disBtnEdit}
          setDisBtnEdit={setDisBtnEdit}
        />
        <UserDataItem
          field="Birthday"
          value={user.birthday}
          disBtnEdit={disBtnEdit}
          setDisBtnEdit={setDisBtnEdit}
        />
        <UserDataItem
          field="Phone"
          value={user.phone}
          disBtnEdit={disBtnEdit}
          setDisBtnEdit={setDisBtnEdit}
        />
        <UserDataItem
          field="City"
          value={user.city}
          disBtnEdit={disBtnEdit}
          setDisBtnEdit={setDisBtnEdit}
        />
        <Logout />
      </div>
    </div>
  );
}
