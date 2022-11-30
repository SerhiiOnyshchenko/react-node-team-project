import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import s from './index.module.css';
import { ReactComponent as Plus } from '../../images/svg/big-plus.svg';

const validationSchema = yup.object({
  image: yup
    .mixed()
    .required('Image is Required!(jpg,jpeg,png)')
    .test(
      'fileFormat',
      'Unsupported file type',
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ),

  comments: yup
    .string()
    .min(8)
    .max(120)
    .matches(/\D/g, 'Only alphabetic characters and symbols are allowed')
    .required(),
});
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export default function ModalPage2({ next, data, onClose, setFormData, prev, pet}) {
  const [fileInput, setFileInput] = useState('');

  const handleSubmit = values => {
    next({ ...values, image: fileInput }, true);
    onClose();
  };

  const selectFile = (e, setFieldValue) => {
    const [file] = e.target.files;

    if (file) {
      setFileInput(file);
      setFieldValue('image', file);
      setFormData(values => ({ ...values, image: file }));
    }
  };

  return (
    <div className={s.containerPet}>
      <div className={s.title}>Add pet</div>
      <div className={s.formWrapper}>
        <Formik
          initialValues={data}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ setFieldValue }) => (
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
                  <button type="button" className={s.addPhotoBtn}>
                    <Plus />
                  </button>
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept=".jpg,.png"
                  onChange={e => selectFile(e, setFieldValue)}
                  className={s.addFileInput}
                />
              </div>
              <ErrorMessage
                name="image"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
              <div className={s.textareaWrapper}>
                <label className={s.label}>Comments</label>
                <Field
                  as="textarea"
                  className={s.textarea}
                  name="comments"
                  placeholder="Type comments"
                ></Field>
                <ErrorMessage
                  name="comments"
                  render={msg => <div className={s.errorMsg}>{msg}</div>}
                />
              </div>

              <div className={s.buttonsWrapper}>
                <button type="submit" className={s.buttonSubmit}>
                  Done
                </button>
                <button type="button" onClick={prev} className={s.buttonSimple}>
                  Back
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
