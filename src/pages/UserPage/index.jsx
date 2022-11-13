import React from 'react';

import Container from 'components/Container';
import UserData from 'components/UserData';
import s from './index.module.css';

export default function UserPage() {
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>My information:</h1>
        <UserData></UserData>
      </Container>
    </section>
  );
}
