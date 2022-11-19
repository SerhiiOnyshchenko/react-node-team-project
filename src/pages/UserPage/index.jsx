import React, { useEffect } from 'react';
import Container from 'components/Container';
import UserData from 'components/UserData';
import Logout from 'components/Logout';
import s from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function UserPage() {
  const navigate = useNavigate();
  let isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate, isLoggedIn]);
  return (
    <section className={s.section}>
      <Container>
        <h2 className={s.title}>My information:</h2>
        <div className={s.userWrap}>
          <UserData></UserData>
          <Logout></Logout>
        </div>
        {/* HERE WILL BE PETSDATA COMPONENT */}
      </Container>
    </section>
  );
}
