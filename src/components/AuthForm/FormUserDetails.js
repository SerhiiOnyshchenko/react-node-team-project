import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import s from './index.module.css';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').max(20),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .max(20),
});

export const FormUserDetails = ({ formData, setFormData, nextStep }) => {
  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <h1 className={s.title}>Registration</h1>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={s.input}
              error={touched.email && errors.email}
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={s.input}
              error={touched.firstName && errors.firstName}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={s.input}
              error={touched.lastName && errors.lastName}
            />
            <div class={s.buttonContainer}>
              <button type="submit" className={`${s.button} ${s.buttonActive}`}>
                Next
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

FormUserDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
