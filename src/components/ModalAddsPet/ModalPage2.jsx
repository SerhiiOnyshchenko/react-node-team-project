import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
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

export default function ModalPage2({ next, data, onClose, prev }) {
  const [fileInput, setFileInput] = useState('');
  const handleSubmit = values => {
    next({ ...values, image: fileInput }, true);
    onClose();
  };

  const selectFile = e => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
    }
  };

  return (
    <>
      <div className={s.title}>Add pet</div>
      <div className={s.formWrapper}>
        <Formik
          initialValues={data}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form autoComplete="on" className={s.formPageTwo}>
            <p className={s.addPhotoText}>Add photo and some comments</p>
            <div className={s.addFileBtnWrapper}>
              {fileInput ? (
                <img
                  className={s.inputImage}
                  src={URL.createObjectURL(fileInput)}
                  alt={fileInput.name}
                />
              ) : (
                <button type="button" className={s.addPhotoBtn}></button>
              )}
              <Field
                type="file"
                name="image"
                accept=".jpg,.png"
                onChange={selectFile}
                className={s.addFileInput}
              />
            </div>

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

            <div className={s.buttonsWrapper}>
              <button type="submit" className={s.buttonSubmit}>
                Submit
              </button>
              <button type="button" onClick={prev} className={s.buttonSimple}>
                Back
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
