import { useState } from 'react';
import PetsList from 'components/PetsList';
import s from './index.module.css';
import ModalPage from 'pages/ModalPage';
import ModalAddsPet from 'components/ModalAddsPet';

export default function PetsData() {
  const [showModal, setShowModal] = useState(false);
  const onAddPetBtnClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.header}>
          <h2 className={s.title}>My pets: </h2>
          <div className={s.addPetWrapper}>
            <button onClick={onAddPetBtnClick} className={s.addPetTitle}>
              Add pet
              <span className={s.buttonAddPet}></span>
            </button>
          </div>
        </div>
        {showModal && (
          <ModalPage onClose={() => setShowModal(false)}>
            <ModalAddsPet onClose={() => setShowModal(false)} />
          </ModalPage>
        )}
        <PetsList />
      </div>
    </>
  );
}
