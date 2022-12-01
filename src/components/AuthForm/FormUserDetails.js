import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './index.module.css';
import eye from '../../images/svg/eye.svg';
import eyeBlock from '../../images/svg/eye-blocked.svg';
import { ErrorMessageWrapper } from './validator';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/^[^ ]{7,32}$/, 'Password should not contain space')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/,
      'Password is not valid as per password policy'
    )
    .max(32),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Both password need to be the same'),
    }),
});

export const FormUserDetails = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  const [passwordType, setPasswordType] = useState('password');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [spanBgImage, setSpanBgImage] = useState(eye);
  const [spanConfirmBgImage, setSpanConfirmBgImage] = useState(eye);
  const [toggleShowValidation, setToggleShowValidation] = useState(
    s.validation
  );

  let passwordInput = document.getElementById('password');
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    passwordInput = document.getElementById('password');
  }, []);
  const lowerCase = useRef();
  const upperCase = useRef();
  const digit = useRef();
  const specialChar = useRef();
  const minLength = useRef();

  function handleToggleBtn(event) {
    if (event.currentTarget.id === 'passwordEye') {
      if (passwordType === 'text') {
        setPasswordType('password');
        setSpanBgImage(eye);
      } else {
        setPasswordType('text');
        setSpanBgImage(eyeBlock);
      }
    } else {
      if (confirmPasswordType === 'text') {
        setConfirmPasswordType('password');
        setSpanConfirmBgImage(eye);
      } else {
        setConfirmPasswordType('text');
        setSpanConfirmBgImage(eyeBlock);
      }
    }
  }

  function checkPassword(data) {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#$%^&*])');
    const length = new RegExp('(?=.{7,})');

    lower.test(data)
      ? lowerCase.current.classList.add(s.valid)
      : lowerCase.current.classList.remove(s.valid);

    upper.test(data)
      ? upperCase.current.classList.add(s.valid)
      : upperCase.current.classList.remove(s.valid);

    number.test(data)
      ? digit.current.classList.add(s.valid)
      : digit.current.classList.remove(s.valid);

    special.test(data)
      ? specialChar.current.classList.add(s.valid)
      : specialChar.current.classList.remove(s.valid);

    length.test(data)
      ? minLength.current.classList.add(s.valid)
      : minLength.current.classList.remove(s.valid);
    if (
      lower.test(data) &&
      upper.test(data) &&
      number.test(data) &&
      special.test(data) &&
      length.test(data)
    ) {
      setToggleShowValidation(s.validation);
    } else {
      setToggleShowValidation(s.validation + ' ' + s.show);
    }
  }
  return (
    <>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <h1 className={s.title}>Registration</h1>
            <div className={s.fieldContainer}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={s.input}
                error={touched.email && errors.email}
              />
              <ErrorMessage name="email">{ErrorMessageWrapper}</ErrorMessage>
            </div>
            <div className={s.fieldContainer}>
              <label className={s.inputBox} htmlFor="password">
                <Field
                  type={passwordType}
                  autoComplete="on"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className={s.input}
                  error={touched.firstName && errors.firstName}
                  onKeyUp={() => checkPassword(passwordInput.value)}
                  onFocus={() => checkPassword(passwordInput.value)}
                  onBlur={() => setToggleShowValidation(s.validation)}
                />
                <span
                  className={s.toggle}
                  id="passwordEye"
                  onClick={event => handleToggleBtn(event)}
                  style={{ backgroundImage: `url(${spanBgImage})` }}
                ></span>

                <div className={toggleShowValidation} id="validation">
                  <ul className={s.items}>
                    <li ref={lowerCase}>At least one lowercase character</li>
                    <li ref={upperCase}>At least one uppercase character</li>
                    <li ref={digit}>At least one number</li>
                    <li ref={specialChar}>At least one special character</li>
                    <li ref={minLength}>At least 7 characters</li>
                  </ul>
                </div>
              </label>
              <ErrorMessage name="password">{ErrorMessageWrapper}</ErrorMessage>
            </div>
            <div className={s.fieldContainer}>
              <Field
                type={confirmPasswordType}
                autoComplete="on"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={s.input}
                error={touched.lastName && errors.lastName}
              />
              <span
                className={s.toggle}
                id="confirmPasswordEye"
                onClick={event => handleToggleBtn(event)}
                style={{ backgroundImage: `url(${spanConfirmBgImage})` }}
              ></span>
              <ErrorMessage name="confirmPassword">
                {ErrorMessageWrapper}
              </ErrorMessage>
            </div>
            <div className={s.buttonContainer}>
              <button type="submit" className={`${s.button} ${s.buttonActive}`}
                name='Next' aria-label='Next'>
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
  data: PropTypes.object.isRequired,
  next: PropTypes.func.isRequired,
};
