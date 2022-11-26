/* eslint-disable no-unused-vars */
import { useState } from 'react';
import s from './index.module.css';
import bigPlus from '../../images/svg/big-plus.svg';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validationSchema = yup.object({
  sex: yup.string().required('Field is required!'),
  location: yup.string().required('Field is required!'),
  price: yup.string().notRequired(),
  image: yup
    .mixed()
    .required('Image is Required!(jpg,jpeg,png)')
    .test(
      'fileFormat',
      'Unsupported file type',
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  comments: yup.string().min(4).max(120).required('Field is required!'),
});

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const StepTwo = ({ formData, setFormData, nextStep, prevStep, file }) => {
  const [direction, setDirection] = useState('back');
  const [fileValue, setFileValue] = useState('');

  const checkCategory = () => {
    return formData.category === 'sell';
  };

  const handleAddAvatar = (e, setFieldValue) => {
    const [file] = e.target.files;
    const reader = new FileReader();
    if (file) {
      setFieldValue('image', file);
      reader.readAsDataURL(file);
      reader.onloadend = e => {
        const base64data = reader.result;
        setFileValue(base64data);
        setFormData(values => {
          return { ...values, image: file };
        });
      };
    }
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
          if (direction === 'forward') {
            // dispatch(authOperations.register(registerValues));
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form className={s.textFildWrap}>
            <fieldset className={s.sexWrap}>
              <legend className={s.sexM}>The sex</legend>
              <label className={s.sexLabel} htmlFor="male">
                <Field
                  className={s.inputSex}
                  type="radio"
                  id="male"
                  name="sex"
                  alt="male"
                  value="male"
                />
                <span className={s.sexIcon}></span>
                <span className={s.sexText}>Male</span>
              </label>

              <label className={s.sexLabel} htmlFor="female">
                <Field
                  className={s.inputSex}
                  type="radio"
                  id="female"
                  name="sex"
                  alt="female"
                  value="female"
                />
                <span className={s.sexIconFemale}></span>
                <span className={s.sexText}>Female</span>
              </label>
              <ErrorMessage
                name="sex"
                render={msg => <div className={s.secStepError}>{msg}</div>}
              />
            </fieldset>
            <div className={s.textFildWrap}>
              <label htmlFor="location" type="text" className={s.label}>
                Location*:
              </label>
              <Field
                id="location"
                name="location"
                placeholder="Type location"
                className={s.inputText}
              />
              <ErrorMessage
                name="location"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>
            {checkCategory() && (
              <div>
                <label htmlFor="price" type="text" className={s.label}>
                  Price*:
                </label>
                <Field
                  id="price"
                  name="price"
                  placeholder="Type price"
                  className={s.inputText}
                />
                <ErrorMessage
                  name="price"
                  render={msg => <div className={s.errorMsg}>{msg}</div>}
                />
              </div>
            )}
            <label htmlFor="price" type="text" className={s.label}>
              Load the pet's image:
            </label>
            <label htmlFor="image" className={s.avatarLabel}>
              <div className={s.addImage}>
                {file ? (
                  <img
                    id="image"
                    className={s.selectedAvatar}
                    src={file}
                    alt={formData.image.name}
                  />
                ) : (
                  <img src={bigPlus} alt="add" />
                )}
              </div>
              <input
                className={s.inputFile}
                type="file"
                id="image"
                name="image"
                onChange={e => handleAddAvatar(e, setFieldValue)}
              />
            </label>
            <ErrorMessage
              name="image"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
            <div className={s.textFildWrap}>
              <label className={s.label} htmlFor="comments">
                Comments
              </label>
              <Field
                component="textarea"
                name="comments"
                id="comments"
                rows="3"
                placeholder="Type comments"
                className={s.inputText}
              ></Field>
              <ErrorMessage
                name="comments"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>
            <div className={s.submitBtnWrapp}>
              <button
                type="submit"
                className={s.submitBtn}
                onClick={() => setDirection('forward')}
              >
                Done
              </button>
              <button
                type="submit"
                className={s.submitBtn}
                onClick={() => setDirection('back')}
              >
                Back
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepTwo;
