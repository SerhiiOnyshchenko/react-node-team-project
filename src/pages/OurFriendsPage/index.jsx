import React, { useEffect } from 'react';
import s from './index.module.css';
import ItemFrien from '../../components/ItemFriend';
import { useDispatch, useSelector } from 'react-redux';
import { friendsOperations, friendsSelectors } from 'redux/friends';

export default function OurFriendsPage() {
  const dispatch = useDispatch();
  const friendsList = useSelector(friendsSelectors.getFriends);
  useEffect(() => {
    dispatch(friendsOperations.fetchFriends());
  }, [dispatch]);

  return (
    <>
      <h1>Our friends</h1>
      {friendsList && (
        <>
<<<<<<< HEAD
          <div className={s.container}>
            <div className={s.align_container}>
              {friendsList[0] &&
                friendsList.map(el => (
                  <ItemFrien
                    key={el._id}
                    site={el.addressUrl}
                    header={el.title}
                    time={el.workDays ? el.workDays : []}
                    adress={el.address ? el.address : '------------------'}
                    email={el.email ? el.email : '------------------'}
                    phone={el.phone ? el.phone : '------------------'}
                    avatar={el.imageUrl ? el.imageUrl : '------------------'}
                  />
                ))}
              ;
=======
          <div className={s.wrapper}>
            <div className={s.container}>
              <div className={s.align_container}>
                {friendsList[0] &&
                  friendsList.map(el => (
                    <ItemFrien
                      key={el._id}
                      site={el.addressUrl}
                      header={el.title}
                      time={el.workDays ? el.workDays : []}
                      adress={el.address ? el.address : '------------------'}
                      email={el.email ? el.email : '------------------'}
                      phone={el.phone ? el.phone : '------------------'}
                      avatar={el.imageUrl ? el.imageUrl : '------------------'}
                    />
                  ))}
                ;
              </div>
>>>>>>> dd25975560e556112b3d9603cc3e78ede2e96a2d
            </div>
          </div>
        </>
      )}
    </>
  );
}
