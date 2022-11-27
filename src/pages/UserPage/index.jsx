import React from 'react';
import Container from 'components/Container';
import UserData from 'components/UserData';
import s from './index.module.css';
import PetsData from './../../components/PetsData/index';

export default function UserPage() {
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
