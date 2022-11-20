import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import validationSchema from './shemas';
import s from './index.module.css';
import Button from 'components/Button';

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = e => {
    e.preventDefault();
    nextStep();
    // if (values.name === '' || values.breed === '' || values.birthday === '') {
    //   setError(true);
    // } else {
    //   ;
    // }
  };

  return (
    <div>
      <p className={s.text}>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </p>
      <Formik validationSchema={validationSchema}>
        <Form>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className={s.radioWrapper}
          >
            <label className={s.radio} htmlFor="lost/found">
              lost/found
              <Field
                type="radio"
                name="category"
                value="lost/found"
                id="lost/found"
                className={s.input}
              />
            </label>
            <label className={s.radio} htmlFor="in good hands">
              in good hands
              <Field
                type="radio"
                name="category"
                value="in good hands"
                id="in good hands"
                className={s.input}
              />
            </label>
            <label className={s.radio} htmlFor="sell">
              sell
              <Field
                type="radio"
                name="category"
                value="sell"
                id="sell"
                className={s.input}
              />
            </label>
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="titleOfAd" type="text" className={s.label}>
              Tittle of ad*
            </label>
            <Field
              id="titleOfAd"
              name="titleOfAd"
              placeholder="Type name pet"
              className={s.inputText}
            />
            {/* <ErrorMessage name="name">{ErrorMessageWrapper}</ErrorMessage> */}
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="namePet" type="text" className={s.label}>
              Name pet
            </label>
            <Field
              id="namePet"
              name="namePet"
              placeholder="Type name pet"
              className={s.inputText}
            />
            {/* <ErrorMessage name="name">{ErrorMessageWrapper}</ErrorMessage> */}
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="birthDate" type="text" className={s.label}>
              Date of birth
            </label>
            <Field
              id="birthDate"
              name="birthDate"
              placeholder="Type date of birth"
              className={s.inputText}
            />
            {/* <ErrorMessage name="name">{ErrorMessageWrapper}</ErrorMessage> */}
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="breed" type="text" className={s.label}>
              Breed
            </label>
            <Field
              id="breed"
              name="breed"
              placeholder="Type breed"
              className={s.inputText}
            />
            {/* <ErrorMessage name="name">{ErrorMessageWrapper}</ErrorMessage> */}
          </div>
          <div className={s.submitBtn}>
            <Button text={'Next'} smole={true} />
            <Button text={'Cancel'} smole={true} />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
