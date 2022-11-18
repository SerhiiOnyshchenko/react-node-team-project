import React from 'react';
import styles from './index.module.css';
import ItemFrien from '../../components/ItemFriend';
import { useGetFriendQuery } from 'redux/friends/rtkFriends';
import Loader from 'components/Loader';

export default function OurFriendsPage() {
  const { isLoading, data, error, isUninitialized } = useGetFriendQuery();

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isUninitialized ? (
        <div>{isUninitialized} - Currently skipped</div>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.align_container}>
                {console.log(data)}
                {data[0] &&
                  data.map(el => (
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
      ) : null}
    </>
  );
}
