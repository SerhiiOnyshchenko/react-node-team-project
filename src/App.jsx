import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import { useDispatch } from 'react-redux';
import { changeLoader } from 'redux/loader/loader-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations } from 'redux/auth';
import ModalPage from 'pages/ModalPage';
import ModalAddsPet from 'components/ModalAddsPet';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('./pages/OurFriendsPage'));

export default function App() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // const loader = useSelector(getLoader);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());

    dispatch(changeLoader(true));
    setTimeout(() => {
      dispatch(changeLoader(false));
    }, 2000);
  }, [dispatch]);

  return (
    <div>
      {/* {loader && <Loader />} */}
      {showModal && (
        <ModalPage onClose={() => setShowModal(false)}>
          <ModalAddsPet />
        </ModalPage>
      )}
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
            <PublicRoute>
              <NewsPage />
            </PublicRoute>
          }
        />
        <Route
          path="notices"
          element={
            <PublicRoute>
              <NoticesPage />
            </PublicRoute>
          }
        />
        <Route
          path="friends"
          element={
            <PublicRoute>
              <OurFriendsPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
