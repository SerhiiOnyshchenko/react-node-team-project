import { Formik, Field, Form } from 'formik';
// import { useState } from 'react';
import s from './index.module.css';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function LoginForm() {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   // e.preventDefault();
  //   // dispatch(authOperations.logIn({ email, password }));
  //   // setEmail('');
  //   // setPassword('');
  //   console.log(`email: ${email}, password: ${password}`);
  // };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={yup.object({
        email: yup.string().email('Invalid email').required('Required field'),
        password: yup.string().required('Required field'),
      })}
      onSubmit={async values => {
        try {
          await dispatch(authOperations.logIn(values)).unwrap();
        } catch (e) {
          // toast.error('Wrong email or password');
        }
      }}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        errors,
        touched,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            className={s.input}
            onChange={handleChange}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />

          <Field
            className={s.input}
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}
