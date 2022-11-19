import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { AuthSelector } from 'redux/auth';

export default function PrivateRoute({ children }) {
  const isLoggedIn = true; //useSelector(AuthSelector.getIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <Suspense
          fallback={
            <div
              style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <RotatingLines
                strokeColor="#F59256"
                strokeWidth="5"
                animationDuration="0.75"
                width="150"
                visible={true}
              />
            </div>
          }
        >
          {children}
        </Suspense>
      ) : (
        <Navigate replace to="login" />
      )}
    </div>
  );
}
