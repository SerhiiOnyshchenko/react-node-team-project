// import { Formik, Field, Form } from 'formik';
import Container from 'components/Container';
import s from './index.module.css';
// import PropTypes from 'prop-types';

// const filterNoticesByTitle = (notices, query) => {
//   if (query === '') return;

//   const normalizeQuery = query.toLowerCase();

//   return notices.filter(evt =>
//     evt.title.toLowerCase().includes(normalizeQuery)
//   );
// };

// export default function NoticesSearch({ onSubmit }) {
//   const handleSubmit = (values, { resetForm }) => {
//     onSubmit(values);
//     resetForm();
//   };

//   return (
//     <Container>
//       <div className={s.searchContainer}>
//         <Formik onSubmit={handleSubmit}>
//           <h2 className={s.searchTitle}>Find your favorite pet</h2>
//           <Form className={s.searchForm}>
//             <Field className={s.searchInput} type="text" placeholder="Search">
//               <button className={s.searchBtn} type="submit"></button>
//             </Field>
//           </Form>
//         </Formik>
//       </div>
//     </Container>
//   );
// }

export default function NoticesSearch() {
  return (
    <Container>
      <div className={s.searchContainer}>
        <h2 className={s.searchTitle}>Find your favorite pet</h2>
        <form className={s.searchForm}>
          <input
            className={s.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
          <button className={s.searchBtn} type="submit"></button>
        </form>
      </div>
    </Container>
  );
}

// NoticesSearch.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
