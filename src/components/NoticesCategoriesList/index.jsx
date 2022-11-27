import NoticeItem from 'components/NoticeCategoriesItem';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations, noticesSelectors } from 'redux/notices';
import { authSelectors } from './../../redux/auth';
import s from './index.module.css';
import { RotatingLines } from 'react-loader-spinner';

export default function NoticesCategoriesList() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [noticesData, setNoticesData] = useState([]);
  const category = useSelector(noticesSelectors.getNoticesCategories);
  const userNotices = useSelector(noticesSelectors.getUserNotices);
  const favorite = useSelector(authSelectors.getUserFavorite);
  const isLoading = useSelector(noticesSelectors.getIsLoadingNotices);
  const pathnameArr = pathname.split('/');

  useEffect(() => {
    resetNoticesData(pathnameArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    setNoticesData(category);
  }, [category]);

  useEffect(() => {
    if (pathnameArr[2] === 'favorite') {
      setNoticesData(favorite);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

  useEffect(() => {
    if (pathnameArr[2] === 'own') {
      setNoticesData(userNotices);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userNotices]);

  const resetNoticesData = async pathnameArr => {
    if (pathnameArr[2] === 'sell') {
      dispatch(noticesOperations.getNoticesCategories({ category: 'sell' }));
    }
    if (pathnameArr[2] === 'lost-found') {
      dispatch(
        noticesOperations.getNoticesCategories({ category: 'lost/found' })
      );
    }
    if (pathnameArr[2] === 'for-free') {
      dispatch(
        noticesOperations.getNoticesCategories({ category: 'in_good_hands' })
      );
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
          {noticesData.length ? (
            noticesData.map(item => (
              <NoticeItem key={item._id} petData={item} />
            ))
          ) : (
            <p className={s.NoticeText}>Not notices</p>
          )}
        </div>
      )}
    </>
  );
}
