import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import Welcome from 'pages/WelcomePage';
import Home from 'pages/HomePage';
import Signup from 'pages/SignUpPage';
import Signin from 'pages/SignInPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsRefreshing } from 'Redux/auth/authSelector';
import { useEffect } from 'react';
import { refreshUserThunk } from 'Redux/auth/authOperations';

export const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing); 
  useEffect(() => {
    dispatch(refreshUserThunk())
  }, [dispatch])

  return (
    <>
      {!isRefreshing && (
        <Suspense>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      </Suspense>
      )}
    </>
  
  );
};
