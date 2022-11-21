import NoticeItem from 'components/NoticeCategoriesItem';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations, noticesSelectors } from 'redux/notices';
import { authSelectors } from './../../redux/auth';
import s from './index.module.css';

export default function NoticesCategoriesList() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [noticesData, setNoticesData] = useState([]);
  const category = useSelector(noticesSelectors.getNoticesCategories);
  const userNotices = useSelector(noticesSelectors.getUserNotices);
  const favorite = useSelector(authSelectors.getUserFavorite);

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
    <div className={s.NoticeList}>
      {noticesData &&
        noticesData.map(item => <NoticeItem key={item._id} petData={item} />)}
    </div>
  );
}
