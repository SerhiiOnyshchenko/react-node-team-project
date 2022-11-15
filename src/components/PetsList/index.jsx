import s from './index.module.css';
import { useDispatch } from 'react-redux';
import { User_Operations } from 'redux/user';
import PropTypes from 'prop-types';

export default function PetsList() {
  // ===========ЗАГЛУШКА===========
  const petsList = [
    {
      _id: 1812,
      petPhoto: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
      name: 'Cat',
      birthday: '2012-04-23T18:25:43.511Z',
      breed: 'Maine Coon',
      comments:
        'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    },
    {
      _id: 1137,
      petPhoto: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
      name: 'Kiwi',
      birthday: '2020-03-09T22:18:26.625Z',
      breed: 'Kiwi',
      comments:
        'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    },
  ];
  const dispatch = useDispatch();
  // const petsList = useSelector(User_Selectors.getUserPetsList);
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
                    {/* <svg width="20" height="20" className={s.deleteIcon}>
                      <use href="../../images/svg/bin.svg"></use>
                    </svg> */}
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
