import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const showNavigate = isLoggedIn && restricted;
  return (
    <>
      {showNavigate ? (
        <Navigate replace to="/" />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      )}
    </>
  );
}
