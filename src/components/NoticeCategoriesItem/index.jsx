import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import ModalNotice from '../NoticeItemModal';
import ModalPage from 'pages/ModalPage';
import s from './modalItem.module.css';
import { toast } from 'react-toastify';
import modalImage from '../../images/no-image-found.png';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
import getPetAge from './getPetAge';

const NOTICE_ITEM_KEYS = [
  {
    label: 'Breed:',
    key: 'breed',
  },
  {
    label: 'Place:',
    key: 'location',
  },
  {
    label: 'Age:',
    key: 'age',
  },
  {
    label: 'Price:',
    key: 'price',
    category: 'sell',
  },
];

export default function NoticeItem({ petData }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userFavorite = useSelector(authSelectors.getUserFavorite);
  const inFavorites = userFavorite.some(favor => favor._id === petData._id);
  const petAge = getPetAge(
    new Date(petData.dateOfBirth.split('.').reverse().join('.'))
  );

  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(inFavorites);
  }, [inFavorites]);

  const handleModalToggle = () => {
    setModalShow(!modalShow);
  };

  const handleFavoriteToggle = () => {
    if (!isLoggedIn) return toast.info('You must be logged in');
    if (favorite === true) {
      try {
        dispatch(authOperations.deleteFromFavorite(petData._id));
        return toast.success('remove from favorite');
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      try {
        dispatch(authOperations.addToFavorite(petData._id));
        return toast.success('add tofavorite');
      } catch (e) {
        toast.error(e.message);
      }
    }
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.imgWrapper}>
          <img
            src={petData.image || modalImage}
            alt={petData.name}
            height="100%"
            style={{ height: 288, objectFit: 'cover' }}
          />
          <div className={s.categoryLabel}>{petData.category}</div>
        </div>
        <div className={s.infoWrapper}>
          <h3 className={s.title}>{petData.titleOfAd}</h3>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key, category }) => {
              if (category && category !== petData.category) return null;
              return (
                <li key={key} className={s.infoList}>
                  <span className={s.label}>{label}</span>
                  <span className={s.lebalText}>{petData[key] || petAge}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.learnMoreBtnCont}>
          <button
            type="button"
            className={s.learnMoreBtn}
            onClick={handleModalToggle}
          >
            Learn more
          </button>
        </div>
        <button
          type="button"
          className={s.heartBtn}
          onClick={handleFavoriteToggle}
        >
          {favorite ? (
            <HeartBtnM className={s.heartItemBtnActive} />
          ) : (
            <HeartBtnM className={s.heartItemBtn} />
          )}
        </button>
      </div>
      {modalShow && (
        <ModalPage onClose={handleModalToggle}>
          <ModalNotice
            petData={petData}
            handleFavoriteToggle={handleFavoriteToggle}
            favorite={favorite}
          />
        </ModalPage>
      )}
    </>
  );
}
