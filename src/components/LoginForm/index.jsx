import { Formik, Field, Form } from 'formik';
import s from './index.module.css';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').max(20),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async values => {
          try {
            await dispatch(authOperations.logIn(values)).unwrap();
          } catch (e) {
            toast.error('Wrong email or password');
          }
        }}
      >
        {({ handleSubmit, handleChange, errors, touched }) => (
          <Form className={s.form} onSubmit={handleSubmit}>
            <h1 className={s.title}>Login</h1>

            <Field
              className={s.input}
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              error={touched.email && errors.email}
            />

            <Field
              className={s.input}
              onChange={handleChange}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              error={touched.password && errors.password}
            />
            <button className={s.button} type="submit">
              Login
            </button>
            <p className={s.question}>
              Don't have an account?{' '}
              <Link to="/register" className={s.registerLink}>
                Register
              </Link>
            </p>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}
