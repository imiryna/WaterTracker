import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectAuthIsRefreshing,
  selectAuthAuthenticated,
} from 'Store/auth/authSelector';
import { refreshUserThunk } from 'Store/auth/authOperations';

const Home = lazy(() => import('pages/HomePage'));
const Welcome = lazy(() => import('pages/WelcomePage'));
const Signin = lazy(() => import('pages/SignInPage'));
const Signup = lazy(() => import('pages/SignUpPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectAuthIsRefreshing);
  const isAuthed = useSelector(selectAuthAuthenticated);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          {isAuthed ? (
            <Route index element={<Home />} />
          ) : (
            <Route index element={<Welcome />} />
          )}

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
