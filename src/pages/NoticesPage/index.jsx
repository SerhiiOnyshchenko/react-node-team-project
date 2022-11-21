import React, { useState, useEffect } from 'react';
import NoticesSearch from 'components/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import AddNoticeButton from 'components/AddNoticeButton';
import s from './index.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Container from 'components/Container';

export default function NoticesPage() {
  const notices = [];
  const navigate = useNavigate();
  const [filteredNotices, setFilteredNotices] = useState(notices);
  const filter = search => {
    const newNotices = notices.filter(notice =>
      notice.titleOfAd.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNotices(newNotices);
  };

  useEffect(() => {
    navigate('/notices/sell');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NoticesSearch onSearch={filter} />
      <div className={s.btnBox}>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </div>
      <Outlet />
    </Container>
  );
}
