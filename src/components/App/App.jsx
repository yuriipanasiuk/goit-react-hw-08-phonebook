import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/hooks';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={Register} redirectTo="/contacts" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    )
  );
};
