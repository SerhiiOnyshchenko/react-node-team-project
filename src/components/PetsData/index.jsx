import { useState } from 'react';
// import PetsList from 'components/PetsList';
import s from './index.module.css';
import Container from 'components/Container';
// import ModalPage from 'pages/ModalPage';

export default function PetsData(props) {
  const [showModal, setShowModal] = useState(false);

  const onAddPetBtnClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2 className={s.title}>My pets: </h2>
            <div className={s.addPetWrapper}>
              <h3 className={s.addPetTitle}>Add pet</h3>
              <button
                onClick={onAddPetBtnClick}
                className={s.buttonAddPet}
              ></button>
            </div>
          </div>
          {/* {showModal && <ModalPage setShowModal={setShowModal} />} */}
          {/* <PetsList /> */}
        </div>
      </Container>
    </>
  );
}
