import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './index.module.css';

const validationSchema = yup.object({
  comments: yup
    .string()
    .min(8)
    .max(120)
    .matches(
      /^[a-zA-Z0-9 ]*$/,
      'Only alphanumeric characters and numbers are allowed'
    )
    .required(),
});

const initialValues = {
  comments: '',
};

export const ModalPage2 = ({ props }) => {
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
            <p className={s.addPhotoText}>Add photo and some comments</p>
            <button type="button" className={s.addPhotoBtn}>
              +
            </button>
            <div className={s.textareaWrapper}>
              <label className={s.textareaLabel}>Comments</label>
              <textarea
                className={s.textarea}
                name="comments"
                placeholder=" Type comments"
              ></textarea>
            </div>
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
            <button
              type="button"
              onClick={props.prev}
              className={s.buttonSimple}
            >
              Back
            </button>
            <button type="submit" className={s.buttonSubmit}>
              Done
            </button>
          </div>
        </Formik>
      </div>
    </>
  );
};
