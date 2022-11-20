import { useState } from 'react';
import s from './modalNotice.module.css';
import modalImage from '../../images/pet-modal.png';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/index';

const PET_MODAL_KEYS = [
  {
    label: 'Name:',
    key: 'namePet',
  },
  {
    label: 'Year:',
    key: 'year',
  },
  {
    label: 'Breed:',
    key: 'breed',
  },
  {
    label: 'Loсation:',
    key: 'location',
  },
  {
    label: 'The sex:',
    key: 'sex',
  },
  {
    label: 'Email:',
    key: 'email',
  },
  {
    label: 'Phone:',
    key: 'phone',
  },
];

export default function ModalNotice({
  petData,
  handleAddFavorite,
  inFavorite,
}) {
  const dispatch = useDispatch();
  const owner = false;

  return (
    <>
      <div className={s.container}>
        <div className={s.infoWrapper}>
          <div className={s.imgWrapper}>
            <img src={petData.avatar || modalImage} alt={petData.name} />
            <div className={s.categoryLabel}>{petData.category}</div>
            <button
              type="button"
              className={s.heartBtn}
              onClick={handleAddFavorite}
            >
              {inFavorite ? (
                <HeartBtnM className={s.heartItemBtnActive} />
              ) : (
                <HeartBtnM className={s.heartItemBtn} />
              )}
            </button>
          </div>
          <div className={s.info}>
            <h3 className={s.title}>{petData.titleOfAd}</h3>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key }) => (
                <li key={key} className={s.infoList}>
                  <span className={s.label}>{label}</span>
                  <span className={s.lebalText}>{petData[key]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.commentsWrapper}>
          <h3 className={s.comments}>Comments: </h3>
          <p className={s.commentsText}>{petData.comments}</p>
        </div>
        <div className={s.buttons}>
          <a href={`tel:${petData.phone}`} className={s.contactBtn}>
            Contact
          </a>
          {owner && (
            <button
              type="button"
              className={s.deleteBtn}
              // onClick={() => {
              //   dispatch();
              // }}
            >
              delete
            </button>
          )}
        </div>
      </div>
    </>
  );
}
