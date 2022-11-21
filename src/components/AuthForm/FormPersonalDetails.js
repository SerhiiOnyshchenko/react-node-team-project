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
    .required('Name is required')
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
    .required('Phone is required')
    .matches(/^\+[0-9]{12}$/, 'Phone should be in format +380671234567'),
});

export const FormPersonalDetails = ({ data, setFormData, next, prev }) => {
  const handleSubmit = values => {
    const registerValues = { ...values, city: data.city };
    delete registerValues.confirmPassword;
    next(registerValues, true);
  };
  const [showDropList, setShowDropList] = useState(false);
  const dispatch = useDispatch();
  let listCities = useSelector(authSelectors.getCities);

  const changeInputCity = e => {
    if (e.target.value !== ' ') {
      setFormData(pre => ({ ...pre, city: e.target.value }));
      if (e.target.value.length >= 3) {
        dispatch(authOperations.searchCity(e.target.value));
        setShowDropList(true);
      } else {
        setShowDropList(false);
      }
    }
  };

  return (
    <>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
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
                  value={data.city}
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
              >
                Register
              </button>
              <button
                type="button"
                className={`${s.button} ${s.buttonDefault} ${s.back}`}
                onClick={() => {
                  values.city = data.city;
                  console.log('values' + values);
                  return prev(values);
                }}
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
        )}
      </Formik>
    </>
  );
};

FormPersonalDetails.propTypes = {
  data: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};
