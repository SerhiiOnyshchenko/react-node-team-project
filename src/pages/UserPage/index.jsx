import React, { useEffect } from 'react';
import Container from 'components/Container';
import UserData from 'components/UserData';
import s from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import PetsData from './../../components/PetsData/index';

export default function UserPage() {
  const navigate = useNavigate();
  let isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate, isLoggedIn]);
  return (
    <Container>
      <div className={s.User}>
        <div>
          <h2 className={s.title}>My information:</h2>
          <UserData />
        </div>
        <PetsData />
      </div>
    </Container>
  );
}
