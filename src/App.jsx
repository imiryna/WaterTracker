import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {
  selectAuthAuthenticated,
  selectAuthToken,
  selectIsRefreshing,
} from 'Store/auth/authSelector';
import { getCurrentUserThunk } from 'Store/currentUser/currentUserThunk';
import { selectIsLoading } from 'Store/currentUser/currentUserSelectors';
import { refreshUserThunk } from 'Store/auth/authOperations';

const Home = lazy(() => import('pages/HomePage'));
const Welcome = lazy(() => import('pages/WelcomePage'));
const Signin = lazy(() => import('pages/SignInPage'));
const Signup = lazy(() => import('pages/SignUpPage'));
const ForgotPassword = lazy(() => import('pages/ForgotPasswordPage'));
const UpdatePassword = lazy(() => import('pages/UpdatePasswordPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthed = useSelector(selectAuthAuthenticated);
  const token = useSelector(selectAuthToken);
  const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(refreshUserThunk())
  // }, [dispatch])

  return isRefreshing && isLoading? (
    <CircularProgress />
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {isAuthed ? (
            <Route index element={<Home />} />
          ) : (
            <Route index element={<Welcome />} />
          )}

          <Route
            path="/signup"
            element={!isAuthed ? <Signup /> : <Navigate to={'/'} />}
          />
          <Route
            path="/signin"
            element={!isAuthed ? <Signin /> : <Navigate to={'/'} />}
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
