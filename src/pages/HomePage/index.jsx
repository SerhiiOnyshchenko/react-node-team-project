import React from 'react';
import Container from 'components/Container';
import s from './index.module.css';

export default function HomePage() {
  return (
    <div className={s.HomePage}>
      <Container>
        <h1 className={s.Title}>Take good care of your small pets</h1>
      </Container>
    </div>
  );
}
