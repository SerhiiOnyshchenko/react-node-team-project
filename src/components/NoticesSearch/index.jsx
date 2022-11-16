import { Formik, Field, Form } from 'formik';
import Container from 'components/Container';
import s from './index.module.css';

export default function NoticesSearch() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Container>
      <div className={s.searchContainer}>
        <Formik onSubmit={handleSubmit}>
          <Form className={s.searchForm}>
            <h2 className={s.searchTitle}>Find your favorite pet</h2>
            <Field className={s.searchInput} type="text" placeholder="Search">
              <button className={s.searchBtn} type="submit"></button>
            </Field>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}
