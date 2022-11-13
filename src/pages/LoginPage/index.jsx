import React from 'react';

import s from './index.module.css';
import LoginForm from '../../components/LoginForm';
import Container from 'components/Container';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Container>
      <h1 className={s.title}>Login</h1>
      <LoginForm />
      <p className={s.question}>
        Don't have an account?{' '}
        <Link to="/register" className={s.registerLink}>
          Register
        </Link>
      </p>
    </Container>
  );
}
