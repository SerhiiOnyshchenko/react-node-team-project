import s from './index.module.css';
import UserDataItem from 'components/UserDataItem';
import { ReactComponent as Logo } from '../../images/svg/camera.svg';

// temporary user
const user = {
  img: './avatar.jpg',
  name: 'Arthur Fleck',
  email: 'joker@mail.com',
  birthday: '21.11.1946',
  phone: '+380976666666',
  city: 'Gotham',
};

export default function UserData() {
  return (
    <div className={s.wrapper}>
      <div className={s.imgBlock}>
        <div className={s.imgWrap}>
          <img
            className={s.image}
            src={require(`${user.img}`)}
            alt={`${user.name}`}
          />
        </div>
        <button type="button" className={s.editPhoto}>
          <Logo className={s.editPhotoIcon} />
          Edit photo
        </button>
      </div>
      <div className={s.userInfo}>
        <UserDataItem field="Name" value={user.name}></UserDataItem>
        <UserDataItem field={'Email'} value={user.email}></UserDataItem>
        <UserDataItem field={'Birthday'} value={user.birthday}></UserDataItem>
        <UserDataItem field={'Phone'} value={user.phone}></UserDataItem>
        <UserDataItem field={'City'} value={user.city}></UserDataItem>
      </div>
    </div>
  );
}
