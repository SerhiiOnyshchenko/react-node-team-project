import React from 'react';
import NoticesSearch from 'components/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import AddNoticeButton from 'components/AddNoticeButton';
import s from './index.module.css';

export default function NoticesPage() {
  return (
    <div className={s.container}>
      {/* <NoticesSearch></NoticesSearch>
      <NoticesCategoriesNav></NoticesCategoriesNav>
      <NoticesCategoriesList></NoticesCategoriesList>
      <AddNoticeButton></AddNoticeButton> */}
    </div>
  );
}
