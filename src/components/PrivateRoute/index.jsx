import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AuthSelector } from 'redux/auth';

export default function PrivateRoute({ children }) {
  const isLoggedIn = true; //useSelector(AuthSelector.getIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      ) : (
        <Navigate replace to="login" />
      )}
    </div>
  );
}
