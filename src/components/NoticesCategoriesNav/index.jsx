import Button from 'components/Button';
import Container from 'components/Container';
import React from 'react';

const buttonText = [
  { smole: true, text: 'sell', active: true },
  { smole: true, text: 'lost/found', active: false },
  { smole: true, text: 'In good hends', active: false },
];
export default function NoticesCategoriesNav() {
  return (
    <Container>
      {buttonText.map(({ text, smole, active }) => (
        <Button text={text} smole={smole} active={active} />
      ))}
    </Container>
  );
}
