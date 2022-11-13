import s from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { User_Operations, User_Selectors } from 'redux/user';

export default function PetsList({ petsList }) {
  const dispatch = useDispatch();
  //   const petsList = useSelector(User_Selectors.getUserPetsList);
  //   const isLoading = useSelector(getIsLoading);

  return (
    <div>
      {
        //       isLoading ? (
        // <h2>Loading...</h2>
        //   ) :
        petsList?.length ? (
          <ul className={s.list}>
            {petsList.map(pet => (
              <li key={pet._id} className={s.card}>
                <img src={pet.petPhoto} alt="Pet" className={s.petPhoto} />
                <button></button>
                <div className={s.petInfo}>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(User_Operations.deletePetFromList(pet._id));
                    }}
                    className={s.deleteBtn}
                  >
                    <svg width="20" height="20" className={s.deleteIcon}>
                      <use href="../../images/svg/bin.svg"></use>
                    </svg>
                  </button>
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
        )
      }
    </div>
  );
}
