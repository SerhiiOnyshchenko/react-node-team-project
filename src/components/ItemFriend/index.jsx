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
        <a href={site} target="_blank" rel="noreferrer">
          {header}
        </a>
        <div className={styles.flex}>
          <div className={styles.image_container}>
            <img className={styles.logo} alt="" src={avatar} />
          </div>

          <div className={styles.friendData}>
            <h6>Time:</h6>
            <p
              onClick={() => {
                setDisplay('flex');
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
              onClick={() => {
                setDisplay('none');
              }}
              style={{ display: display }}
              className={styles.popup}
            >
              <div>
                {newArray.map((_el, index) => (
                  <p>{days[index]}</p>
                ))}
              </div>
              <div>
                {newArray.map(el => (
                  <p>
                    {el.from} {el.to}
                  </p>
                ))}
              </div>
            </div>

            <h6>Adress:</h6>
            <p id={styles['adress']}>{adress}</p>
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

ItemFrien.propTypes = PropTypes.objectOf({
  header: PropTypes.string,
  time: PropTypes.arrayOf(
    PropTypes.objectOf({
      isOpen: PropTypes.string,
      from: PropTypes.string,
      to: PropTypes.string,
    })
  ),
  adress: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  avatar: PropTypes.string,
  site: PropTypes.string,
});
export default ItemFrien;
