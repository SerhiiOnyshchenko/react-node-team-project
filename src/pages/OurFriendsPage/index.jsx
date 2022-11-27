import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import ItemFrien from '../../components/ItemFriend';
import { useDispatch, useSelector } from 'react-redux';
import { friendsOperations, friendsSelectors } from 'redux/friends';
import Pagination from 'components/Pagination';

export default function OurFriendsPage() {
  const dispatch = useDispatch();
  const friendsList = useSelector(friendsSelectors.getFriends);
  const [friendsSlice, setFriendsSlice] = useState([]);
  useEffect(() => {
    dispatch(friendsOperations.fetchFriends());
  }, [dispatch]);

  return (
    <>
      <h1>Our friends</h1>
      {friendsList && (
        <>
          <div className={s.container}>
            <div className={s.align_container}>
              {friendsList[0] &&
                friendsSlice.map(el => (
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
          <Pagination
            totalHits={9}
            pageSize={6}
            data={friendsList}
            setData={n => {
              setFriendsSlice(n);
            }}
          />
        </>
      )}
    </>
  );
}
