import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './index.module.css';
import { parse } from 'date-fns';

const today = new Date();

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/[a-zA-Z]/, 'Only alphanumeric characters are allowed')
    .required(),
  birthday: yup
    .date()
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('please enter a valid date')
    .required()
    .min('1950-11-13', 'Date is too early')
    .max(today),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(/[a-zA-Z]/, 'Only alphanumeric characters are allowed')
    .required(),
});

export default function ModalPage1(props) {
  const handleSubmit = values => {
    props.next(values, false);
  };
  return (
    <>
      <div className={s.title}>Add pet</div>
      <div className={s.formWrapper}>
        <Formik
          initialValues={props.data}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form autoComplete="on" className={s.formPageOne}>
            <label htmlFor="name" className={s.label}>
              Name pet
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Type name pet"
              className={s.input}
            />
            <ErrorMessage
              name="name"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <label htmlFor="birthday" className={s.label}>
              Date of birth
            </label>
            <Field
              type="text"
              name="birthday"
              placeholder="Type date of birth"
              className={s.input}
            />
            <ErrorMessage
              name="birthday"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <label htmlFor="breed" className={s.label}>
              Type breed
            </label>
            <Field
              type="text"
              name="breed"
              placeholder="Type breed"
              className={s.inputLast}
            />
            <ErrorMessage
              name="breed"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <div className={s.buttonsWrapper}>
              <button type="submit" className={s.buttonSubmit}>
                Next
              </button>
              <button
                type="button"
                className={s.buttonSimple}
                onClick={props.closeModal}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
