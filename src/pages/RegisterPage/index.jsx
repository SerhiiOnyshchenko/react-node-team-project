import React from 'react';
import AuthForm from 'components/AuthForm';
import Container from 'components/Container';
import s from './index.module.css';

export default function RegisterPage() {
  return (
    <div className={s.waveBackground}>
      <Container>
        <AuthForm />
      </Container>
    </div>
  );
}
