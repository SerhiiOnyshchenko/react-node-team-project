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

export default function ModalPage2(props) {
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
          <Form autoComplete="off" className={s.formPageTwo}>
            <p className={s.addPhotoText}>Add photo and some comments</p>
            <button type="button" className={s.addPhotoBtn}>
              +
            </button>
            <div className={s.textareaWrapper}>
              <label className={s.label}>Comments</label>
              <Field
                as="textarea"
                className={s.textarea}
                name="comments"
                placeholder="Type comments"
              ></Field>
              <ErrorMessage name="comments" />
            </div>
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
}
