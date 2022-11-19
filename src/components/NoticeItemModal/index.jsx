import { useState } from 'react';
import { sampleData } from './sampleData';
import s from './modalNotice.module.css';
import modalImage from '../../images/pet-modal.png';
import { ReactComponent as HeartBtnS } from '../../images/svg/heartBtnS.svg';

const PET_MODAL_KEYS = [
  {
    label: 'Name:',
    key: 'name',
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

export default function ModalNotice({ id, handleAddFavorite }) {
  const [petData, setPetData] = useState(sampleData);

  // useEffect(() => {
  //   setPetData();
  // }, [id]);

  return (
    <>
      <div className={s.container}>
        <div className={s.infoWrapper}>
          <div className={s.imgWrapper}>
            <img src={petData.avatar || modalImage} alt={petData.name} />
            <div className={s.categoryLabel}>{petData.category}</div>
          </div>
          <div className={s.info}>
            <h3 className={s.title}>{petData.title}</h3>
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
          <button
            type="button"
            className={s.addToFovorBtn}
            onClick={handleAddFavorite}
          >
            add to
            <HeartBtnS className={s.heartBtn} />
          </button>
          <a href={`tel:${petData.phone}`} className={s.contactBtn}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
