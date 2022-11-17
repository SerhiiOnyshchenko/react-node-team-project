import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { authOperations, authSelectors } from '../../redux/auth';
import s from './index.module.css';
import { ErrorMessageWrapper } from './validator';

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
      /^[\w\- ]+, [\w\- ]+$/,
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
  const [direction, setDirection] = useState('back');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [navigate, isLoggedIn]);

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
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
            <Field
              name="city"
              placeholder="City, region"
              className={s.input}
              margin="normal"
            />
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
