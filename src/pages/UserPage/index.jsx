import React from 'react';

import Container from 'components/Container';
import UserData from 'components/UserData';
import Logout from 'components/Logout';

import s from './index.module.css';

export default function UserPage() {
  return (
    <section className={s.section}>
      <Container>
        <h1 className={s.title}>My information:</h1>
        <div className={s.userWrap}>
          <UserData></UserData>
          <Logout></Logout>
        </div>
      </Container>
    </section>
  );
}
