import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      ) : (
        <Navigate replace to="/login" />
      )}
    </div>
  );
}
