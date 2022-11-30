import s from './index.module.css';
import UserDataItem from 'components/UserDataItem';
import { ReactComponent as Logo } from '../../images/svg/camera.svg';
import Logout from 'components/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { useState } from 'react';

export default function UserData() {
  const user = useSelector(authSelectors.getUser);
  const [disBtnEdit, setDisBtnEdit] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getUserToken);

  const selectFile = e => {
    const [file] = e.target.files;
    if (file) {
      dispatch(
        authOperations.patchUserInfo({
          type: 'image',
          value: file,
          token,
        })
      );
    }
  };

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

        <div className={s.InputWrapper}>
          <button
            type="button"
            className={s.editPhoto}
            name="Edit photo"
            aria-label="Edit photo"
          >
            <Logo className={s.editPhotoIcon} />
            Edit photo
          </button>
          <input
            className={s.InputFile}
            type="file"
            accept=".jpg,.png"
            onChange={selectFile}
          />
        </div>
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
