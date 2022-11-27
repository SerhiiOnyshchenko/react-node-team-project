import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { petsOperations, petsSelectors } from 'redux/pets';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function PetsList() {
  const dispatch = useDispatch();
  const petsList = useSelector(petsSelectors.getUserPetsList);
  const isLoadingPets = useSelector(petsSelectors.getIsLoading);

  useEffect(() => {
    dispatch(petsOperations.getUserPet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoadingPets ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RotatingLines
            strokeColor="#F59256"
            strokeWidth="5"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        </div>
      ) : (
        <div>
          {petsList?.length ? (
            <ul className={s.list}>
              {petsList.map(pet => (
                <li key={pet._id} className={s.card}>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(petsOperations.deleteUserPet(pet._id));
                    }}
                    className={s.deleteBtn}
                  ></button>
                  <img src={pet.image} alt="Pet" className={s.petPhoto} />
                  <div className={s.petInfo}>
                    <p className={s.petInfoCategory}>
                      <span className={s.petInfoTitle}>Name: </span>
                      {pet.name}
                    </p>
                    <p className={s.petInfoCategory}>
                      <span className={s.petInfoTitle}>Date of birth: </span>
                      {pet.birthday}
                    </p>
                    <p className={s.petInfoCategory}>
                      <span className={s.petInfoTitle}>Breed: </span>
                      {pet.breed}
                    </p>
                    <p className={s.petInfoCategory}>
                      <span className={s.petInfoTitle}>Comments: </span>
                      {pet.comments}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className={s.noPets}>No pets available in the list yet</p>
          )}
        </div>
      )}
    </>
  );
}
