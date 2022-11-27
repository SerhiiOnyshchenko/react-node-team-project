import React from 'react';
import s from './index.module.css';
import LoginForm from '../../components/LoginForm';
import Container from 'components/Container';

export default function LoginPage() {
  return (
    <div className={s.background}>
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
}
