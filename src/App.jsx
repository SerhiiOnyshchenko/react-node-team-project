import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import s from './App.module.css';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { getLoader } from 'redux/loader/loader-selectors';
import { useDispatch } from 'react-redux';
import { changeLoader } from 'redux/loader/loader-actions';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('./pages/OurFriendsPage'));

export default function App() {
  const dispatch = useDispatch();
  const loader = useSelector(getLoader);
  useEffect(() => {
    dispatch(changeLoader(true));
    setTimeout(() => {
      dispatch(changeLoader(false));
    }, 2000);
  }, []);

  return (
    <div>
      {loader && <Loader />}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="news"
          element={
            <PublicRoute restricted>
              <NewsPage />
            </PublicRoute>
          }
        />
        <Route
          path="notices "
          element={
            <PublicRoute restricted>
              <NoticesPage />
            </PublicRoute>
          }
        />
        <Route
          path="friends"
          element={
            <PublicRoute restricted>
              <OurFriendsPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
