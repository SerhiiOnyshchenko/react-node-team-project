import NoticeItem from 'components/NoticeCategoriesItem';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations, noticesSelectors } from 'redux/notices';
import { authSelectors } from './../../redux/auth';
import s from './index.module.css';
import { RotatingLines } from 'react-loader-spinner';
import Pagination from 'components/Pagination';

export default function NoticesCategoriesList() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [noticesData, setNoticesData] = useState([]);
  const category = useSelector(noticesSelectors.getNoticesCategories);
  const userNotices = useSelector(noticesSelectors.getUserNotices);
  const favorite = useSelector(authSelectors.getUserFavorite);
  const isLoading = useSelector(noticesSelectors.getIsLoadingNotices);

  const [noticesSlice, setNoticesSlice] = useState([]);

  useEffect(() => {
    const pathnameArr = pathname.split('/');
    resetNoticesData(pathnameArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    setNoticesData(category);
  }, [category]);

  useEffect(() => {
    setNoticesData(userNotices);
  }, [userNotices]);

  const resetNoticesData = async pathnameArr => {
    if (pathnameArr[2] === 'sell') {
      dispatch(noticesOperations.getNoticesCategories('sell'));
    }
    if (pathnameArr[2] === 'lost-found') {
      dispatch(noticesOperations.getNoticesCategories('lost/found'));
    }
    if (pathnameArr[2] === 'for-free') {
      dispatch(noticesOperations.getNoticesCategories('in_good_hands'));
    }
    if (pathnameArr[2] === 'favorite') {
      setNoticesData(favorite);
    }
    if (pathnameArr[2] === 'own') {
      dispatch(noticesOperations.getUserNotices());
    }
  };
  return (
    <>
      {isLoading ? (
        <div
          style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RotatingLines
            strokeColor="#F59256"
            strokeWidth="5"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        </div>
      ) : (
        <div className={s.NoticeList}>
          {noticesSlice &&
            noticesSlice.map(item => (
              <NoticeItem key={item._id} petData={item} />
            ))}
        </div>
      )}
      <Pagination
        totalHits={noticesData.length}
        pageSize={8}
        data={noticesData}
        setData={n => {
          setNoticesSlice(n);
        }}
      />
    </>
  );
}
