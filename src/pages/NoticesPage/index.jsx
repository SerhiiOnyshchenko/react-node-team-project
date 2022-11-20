import React from 'react';
import NoticesSearch from 'components/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/NoticesCategoriesList';
import AddNoticeButton from 'components/AddNoticeButton';
import s from './index.module.css';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

export default function NoticesPage() {
  const notices = [];
  // useSelector(noticesSelectors.getNoticesCategories());
  const [filteredNotices, setFilteredNotices] = useState(notices);

  const filter = search => {
    const newNotices = notices.filter(notice =>
      notice.titleOfAd.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredNotices(newNotices);
  };

  return (
    <div className={s.Container}>
      <NoticesSearch onSearch={filter}></NoticesSearch>
      <NoticesCategoriesNav></NoticesCategoriesNav>
      <NoticesCategoriesList list={filteredNotices}></NoticesCategoriesList>
      <AddNoticeButton></AddNoticeButton>
    </div>
  );
}
