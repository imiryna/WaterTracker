import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import Welcome from 'pages/WelcomePage';
import Home from 'pages/HomePage';
import Signup from 'pages/SignUpPage';
import Signin from 'pages/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthIsRefreshing,
  selectAuthAuthenticated,
} from 'Store/auth/authSelector';
import { refreshUserThunk } from 'Store/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const isAuthed = useSelector(selectAuthAuthenticated);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
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
  );
};
