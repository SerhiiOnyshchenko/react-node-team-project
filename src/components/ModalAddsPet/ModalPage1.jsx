import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './index.module.css';
import parse from 'date-fns/parse';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/[a-zA-Z]/, 'Only alphanumeric characters are allowed')
    .required(),
  birthday: yup.date
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('please enter a valid date')
    .required()
    .min('1950-11-13', 'Date is too early'),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(/[a-zA-Z]/, 'Only alphanumeric characters are allowed')
    .required(),
});

const initialValues = {
  name: '',
  birthday: '',
  breed: '',
};

export const ModalPage1 = ({ props }) => {
  const handleSubmit = values => {
    props.next(values, true);
  };
  return (
    <>
      <div className={s.title}>Add pet</div>
      <div className={s.formWrapper}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form autoComplete="off">
            <label htmlFor="name">
              Name pet
              <Field
                type="text"
                name="name"
                placeholder="Type name pet"
                className={s.input}
              />
              <ErrorMessage name="name" />
            </label>
            <label htmlFor="birthday">
              Date of birth
              <Field
                type="text"
                name="birthday"
                placeholder="Type date of birth"
                className={s.input}
              />
              <ErrorMessage name="birthday" />
            </label>
            <label htmlFor="breed">
              Type breed
              <Field
                type="text"
                name="breed"
                placeholder="Type breed"
                className={s.input}
              />
              <ErrorMessage name="breed" />
            </label>
          </Form>
          <div className={s.buttonsWrapper}>
            <button type="button" className={s.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={s.cancelBtn}>
              Next
            </button>
          </div>
        </Formik>
      </div>
    </>
  );
};
