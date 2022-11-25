import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { petsOperations, petsSelectors } from 'redux/pets';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function PetsList() {
  const dispatch = useDispatch();
  const petsList = useSelector(petsSelectors.getUserPetsList);

  useEffect(() => {
    dispatch(petsOperations.getUserPet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {petsList?.length ? (
        <ul className={s.list}>
          {petsList.map(pet => (
            <li key={pet._id} className={s.card}>
              <img src={pet.image} alt="Pet" className={s.petPhoto} />
              <button></button>
              <div className={s.petInfo}>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(petsOperations.deleteUserPet(pet._id));
                  }}
                  className={s.deleteBtn}
                ></button>
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
  );
}

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      petPhoto: PropTypes.string,
      name: PropTypes.string,
      birthday: PropTypes.string,
      breed: PropTypes.string,
      comments: PropTypes.string,
    })
  ),
};
