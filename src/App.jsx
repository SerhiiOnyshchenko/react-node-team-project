import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoticesCategoriesList from './components/NoticesCategoriesList';
import Loader from './components/Loader';
import BtnScrollToTop from 'components/BtnScrollToTop';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('./pages/OurFriendsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Header />
          <BtnScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
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
            >
              <Route
                path="sell"
                element={
                  <PublicRoute>
                    <NoticesCategoriesList />
                  </PublicRoute>
                }
              />
              <Route
                path="lost-found"
                element={
                  <PublicRoute>
                    <NoticesCategoriesList />
                  </PublicRoute>
                }
              />
              <Route
                path="for-free"
                element={
                  <PublicRoute>
                    <NoticesCategoriesList />
                  </PublicRoute>
                }
              />
              <Route
                path="favorite"
                element={
                  <PublicRoute>
                    <NoticesCategoriesList />
                  </PublicRoute>
                }
              />
              <Route
                path="own"
                element={
                  <PublicRoute>
                    <NoticesCategoriesList />
                  </PublicRoute>
                }
              />
            </Route>
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
        </>
      )}
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
