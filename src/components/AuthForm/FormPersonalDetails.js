import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import s from './index.module.css';
import { authOperations } from '../../redux/auth';

export const FormPersonalDetails = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [direction, setDirection] = useState('back');
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
          dispatch(authOperations.register(values));
        }}
      >
        <Form className={s.form}>
          <h1 className={s.title}>Registration</h1>
          <Field name="name" placeholder="Name" className={s.input} />
          <Field
            name="city"
            placeholder="City, region"
            className={s.input}
            margin="normal"
          />
          <Field name="phone" placeholder="Mobile phone" className={s.input} />
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
