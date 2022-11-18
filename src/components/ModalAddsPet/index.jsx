import React, { useState } from 'react';

import ModalPage1 from './ModalPage1';
import ModalPage2 from './ModalPage2';
// import ModalPage from 'pages/ModalPage';

export default function ModalAddsPet(props) {
  const [data, setData] = useState({
    name: '',
    birthday: '',
    breed: '',
    photo: '',
    comments: '',
  });
  const [page, setPage] = useState(0);

  const formTitles = ['First page', 'Second page'];

  return (
    <>
      <div className={s.modal}></div>
    </>
  );
}
