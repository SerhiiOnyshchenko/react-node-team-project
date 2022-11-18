import React, { useEffect } from 'react';

import s from './index.module.css';
import LoginForm from '../../components/LoginForm';
import Container from 'components/Container';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function LoginPage() {
  const navigate = useNavigate();
  let isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [navigate, isLoggedIn]);

  return (
    <div className={s.background}>
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
}
