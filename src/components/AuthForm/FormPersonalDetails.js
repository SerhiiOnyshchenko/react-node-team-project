import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { authOperations, authSelectors } from '../../redux/auth';
import s from './index.module.css';
import { ErrorMessageWrapper } from './validator';
import DropList from 'components/DropList';

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
      'Name should only contain letters'
    ),
  city: yup
    .string()
    .matches(
      /^[\w\-’ ]+, [\w\-’ ]+$/,
      'Address should be in format: City, Region'
    ),
  phone: yup
    .string()
    .matches(/^\+[0-9]{12}$/, 'Phone should be in format +380671234567'),
});

export const FormPersonalDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [showDropList, setShowDropList] = useState(false);
  const [direction, setDirection] = useState('back');
  const dispatch = useDispatch();
  let listCities = useSelector(authSelectors.getCities);

  const changeInputCity = e => {
    setFormData(pre => ({ ...pre, city: e.target.value }));
    if (e.target.value.length >= 3) {
      dispatch(authOperations.searchCity(e.target.value));
      setShowDropList(true);
    } else {
      setShowDropList(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData({ ...values, city: formData.city });
          direction === 'back' ? prevStep() : nextStep();
          const registerValues = { ...values };
          delete registerValues.confirmPassword;
          if (direction === 'forward') {
            dispatch(authOperations.register(registerValues));
          }
        }}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <h1 className={s.title}>Registration</h1>
          <div className={s.fieldContainer}>
            <Field name="name" placeholder="Name" className={s.input} />
            <ErrorMessage name="name">{ErrorMessageWrapper}</ErrorMessage>
          </div>
          <div className={s.fieldContainer}>
            <label className={s.inputBox} htmlFor="city">
              <Field
                name="city"
                id="city"
                placeholder="City, region"
                className={s.input}
                margin="normal"
                autoComplete="of"
                value={formData.city}
                onChange={changeInputCity}
              />
              {showDropList && (
                <DropList
                  list={listCities}
                  onSelect={str => {
                    setFormData(pre => ({ ...pre, city: str }));
                    setShowDropList(false);
                  }}
                />
              )}
            </label>
            <ErrorMessage name="city">{ErrorMessageWrapper}</ErrorMessage>
          </div>
          <div className={s.fieldContainer}>
            <Field
              name="phone"
              placeholder="Mobile phone"
              className={s.input}
            />
            <ErrorMessage name="phone">{ErrorMessageWrapper}</ErrorMessage>
          </div>
          <div className={s.buttonContainer}>
            <button
              type="submit"
              className={`${s.button} ${s.buttonActive} ${s.register}`}
              onClick={() => setDirection('forward')}
            >
              Register
            </button>
            <button
              type="submit"
              className={`${s.button} ${s.buttonDefault} ${s.back}`}
              onClick={() => setDirection('back')}
            >
              Back
            </button>
          </div>
          <p className={s.questionText}>
            Already have an account?{' '}
            <Link to="/login" className={s.loginLink}>
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </>
  );
};

FormPersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
