import { useState } from 'react';
import s from './index.module.css';

const ItemFrien = props => {
  const [display, setDisplay] = useState('none');
  const { header, time, adress, email, phone, avatar, site } = props;
  const days = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newArray = time
    .filter(el => el.isOpen !== false)
    .map((el, index) => el.isOpen && { day: days[index], ...el });

  return (
    <div className={s.padding}>
      <div className={s.container}>
        <h3>{header}</h3>
        <div className={s.flex}>
          <div className={s.image_container}>
            <img className={s.logo} alt="" src={avatar} />
          </div>

          <div className={s.friendData}>
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
              id={s['time']}
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
              className={s.popup}
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
            <a href={site} target="_blank" id={s['adress']} rel="noreferrer">
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
