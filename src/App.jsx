import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import Welcome from 'pages/WelcomePage';
import Home from 'pages/HomePage';
import Signup from 'pages/SignUpPage';
import Signin from 'pages/SignInPage';
import ForgotPassword from 'pages/ForgotPasswordPage';
import UpdatePassword from 'pages/UpdatePasswordPage';

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/updatepassword" element={<UpdatePassword/>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
