import React, { useEffect } from 'react';
import AuthForm from 'components/AuthForm';
import Container from 'components/Container';
import s from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function RegisterPage() {
  const navigate = useNavigate();
  let isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [navigate, isLoggedIn]);
  return (
    <div className={s.waveBackground}>
      <Container>
        <AuthForm />
      </Container>
    </div>
  );
}
