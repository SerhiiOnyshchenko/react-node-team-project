import { useState } from 'react';
import ModalAddsPet from 'components/ModalAddsPet';
import PetsList from 'components/PetsList';
import s from './PetsData.module.scss';

export default function PetsData(props) {
  const [showModal, setShowModal] = useState(false);

  const onAddPetBtnClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.head}>
          <h2 className={s.title}>My pets: </h2>
          <div className={s.addPetWrapper}></div>
        </div>
      </div>
    </>
  );
}
