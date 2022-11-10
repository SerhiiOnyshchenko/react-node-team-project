import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Container from '../Container';
// import { useSelector } from 'react-redux';
// import { AuthSelector } from 'redux/auth';

export default function PablicRoute({ children, restricted = false }) {
  const isLoggedIn = false; // useSelector(AuthSelector.getIsLoggedIn);
  const showNavigate = isLoggedIn && restricted;
  return (
    <>
      {showNavigate ? (
        <Navigate replace to="/" />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Container>{children}</Container>
        </Suspense>
      )}
    </>
  );
}
