import { Formik, Field, Form, ErrorMessage } from 'formik';
import s from './index.module.css';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { RotatingLines } from 'react-loader-spinner';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required').min(7).max(32),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getIsLoading = useSelector(authSelectors.getIsLoading);

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
            navigate('/user');
          } catch (error) {}
        }}
      >
        {({ handleSubmit, handleChange, touched, errors }) => (
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
            <ErrorMessage
              className={s.errmsg_login}
              name="email"
              component="div"
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
            <ErrorMessage
              className={s.errmsg_pass}
              name="password"
              component="div"
            />
            {getIsLoading ? (
              <div className={s.buttonActive}>
                <RotatingLines
                  strokeColor="#fdf7f2"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="40"
                  visible={true}
                />
              </div>
            ) : (
              <button className={s.button} type="submit" name='Login' aria-label='Login'>
                Login
              </button>
            )}
            <p className={s.question}>
              Don't have an account?{' '}
              <Link to="/register" className={s.registerLink}>
                Register
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
}
