import React, { useEffect } from 'react';
import styles from './index.module.css';
import ItemFrien from '../../components/ItemFriend';
import { useDispatch, useSelector } from 'react-redux';
import { friendsOperations, friendsSelectors } from 'redux/friends';

export default function OurFriendsPage() {
  const dispatch = useDispatch();
  const friendsList = useSelector(friendsSelectors.getFriends());
  useEffect(() => {
    dispatch(friendsOperations.fetchFriends());
  }, [dispatch]);

  return (
    <>
      <h1>Our friends</h1>
      {friendsList && (
        <>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.align_container}>
                {console.log(friendsList)}
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
            </div>
          </div>
        </>
      )}
    </>
  );
}
