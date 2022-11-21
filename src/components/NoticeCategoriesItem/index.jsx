import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalNotice from '../NoticeItemModal';
import ModalPage from 'pages/ModalPage';
// eslint-disable-next-line
import { sampleData } from './sampleData';
import s from './modalItem.module.css';
import { toast } from 'react-toastify';
import modalImage from '../../images/pet-item.jpg';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
import { authOperations, authSelectors } from 'redux/auth';

export const NOTICE_ITEM_KEYS = [
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
    key: 'year',
  },
  {
    label: 'Price:',
    key: 'price',
    category: 'sell',
  },
];

export default function NoticeItem({ petData = sampleData }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const favorite = useSelector(authSelectors.getUserFavorite);
  console.log(`${isLoggedIn}: isLoggedIn`);
  console.log(`favorite: ${favorite}`);
  console.log(petData._id);
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);
  const [inFavorite, setFavorite] = useState(false);
  // let inFavorite =

  const handleModalToggle = () => {
    setModalShow(!modalShow);
  };
  const handleAddFavorite = () => {
    if (!isLoggedIn) return toast.info('you need login');
    dispatch(authOperations.addToFavorite(petData._id));

    setFavorite(!inFavorite);
    if (!inFavorite) return toast.success('add tofavorite');
    return toast.success('remove from favorite');
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.imgWrapper}>
          <img src={petData.avatar || modalImage} alt={petData.name} />
          <div className={s.categoryLabel}>{petData.category}</div>
        </div>
        <div className={s.infoWrapper}>
          <h3 className={s.title}>{petData.title}</h3>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key, category }) => {
              if (category && category !== petData.category) return null;
              return (
                <li key={key} className={s.infoList}>
                  <span className={s.label}>{label}</span>
                  <span className={s.lebalText}>{petData[key]}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          type="button"
          className={s.learmMoreBtn}
          onClick={handleModalToggle}
        >
          Learn more
        </button>
        <button
          type="button"
          className={s.heartBtn}
          onClick={handleAddFavorite}
          inFavorite={inFavorite}
        >
          {inFavorite ? (
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
            handleAddFavorite={handleAddFavorite}
            inFavorite={inFavorite}
          />
        </ModalPage>
      )}
    </>
  );
}
