import React, { useEffect } from 'react';
import NoticesSearch from 'components/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav';
import AddNoticeButton from 'components/AddNoticeButton';
import s from './index.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Container from 'components/Container';

export default function NoticesPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      <NoticesSearch />
      <div className={s.btnBox}>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </div>
      <Outlet />
    </Container>
  );
}
