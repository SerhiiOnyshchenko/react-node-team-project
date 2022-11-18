import { useState } from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';

const ItemFrien = props => {
  const [display, setDisplay] = useState('none');
  const { header, time, adress, email, phone, avatar, site } = props;
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newArray = time
    .filter(el => el.isOpen !== false)
    .map((el, index) => el.isOpen && { day: days[index], ...el });

  return (
    <div className={styles.padding}>
      <div className={styles.container}>
        <h3>{header}</h3>
        <div className={styles.flex}>
          <div className={styles.image_container}>
            <img className={styles.logo} alt="" src={avatar} />
          </div>

          <div className={styles.friendData}>
            <h6>Time:</h6>
            <p
              onClick={() => {
                if (time[0]) {
                  setDisplay('flex');
                  setTimeout(() => {
                    setDisplay('none');
                  }, 2000);
                }
              }}
              id={styles['time']}
            >
              {time[0] ? (
                <>
                  {days[0]} {newArray[0].from} {newArray[0].to}
                </>
              ) : (
                <>-----------------</>
              )}
            </p>
            <div
              onMouseLeave={() => {
                setDisplay('none');
              }}
              style={{ display: display }}
              className={styles.popup}
            >
              <div>
                {newArray.map((_el, index) => (
                  <p key={index}>{days[index]}</p>
                ))}
              </div>
              <div>
                {newArray.map((el, index) => (
                  <p key={index}>
                    {el.from} {el.to}
                  </p>
                ))}
              </div>
            </div>

            <h6>Adress:</h6>
            <a href={site} id={styles['adress']}>
              {adress}
            </a>
            <h6>Email:</h6>
            <p>{email}</p>
            <h6>Phone:</h6>
            <p>{phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFrien;
