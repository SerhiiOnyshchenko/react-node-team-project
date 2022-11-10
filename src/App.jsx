import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import s from './App.module.css';
import PablicRoute from 'components/PablicRoute';
import PrivateRoute from 'components/PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage';
import Header from 'pages/Header';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const UserPage = lazy(() => import('./pages/UserPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('./pages/OurFriendsPage'));

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<PrivateRoute></PrivateRoute>} />
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
            <PablicRoute restricted>
              <LoginPage />
            </PablicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PablicRoute restricted>
              <RegisterPage />
            </PablicRoute>
          }
        />
        <Route
          path="news"
          element={
            <PablicRoute restricted>
              <NewsPage />
            </PablicRoute>
          }
        />
        <Route
          path="notices "
          element={
            <PablicRoute restricted>
              <NoticesPage />
            </PablicRoute>
          }
        />
        <Route
          path="friends"
          element={
            <PablicRoute restricted>
              <OurFriendsPage />
            </PablicRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
