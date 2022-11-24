import React, { useState, useEffect } from 'react';
import NoticesSearch from 'components/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import AddNoticeButton from 'components/AddNoticeButton';
import s from './index.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Container from 'components/Container';

export default function NoticesPage() {
  const notices = [];
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [filteredNotices, setFilteredNotices] = useState(notices);
  const filter = search => {
    const newNotices = notices.filter(notice =>
      notice.titleOfAd.toLowerCase().includes(search.toLowerCase())
    );
		setFilteredNotices(newNotices);
		console.log(filteredNotices);
  };

  useEffect(() => {
    if (
      pathname === '/notices/lost-found' ||
      pathname === '/notices/for-free' ||
      pathname === '/notices/favotire' ||
      pathname === '/notices/own'
    ) {
    } else {
      navigate('/notices/sell');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NoticesSearch onSearch={filter}></NoticesSearch>
      <div className={s.btnBox}>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </div>
      <Outlet />
    </Container>
  );
}
