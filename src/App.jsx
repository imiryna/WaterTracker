import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation';
import Welcome from 'pages/WelcomePage';
import Home from 'pages/HomePage';
import Signup from 'pages/SignUpPage';
import Signin from 'pages/SignInPage';

export const App = () => {
  return (
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
  );
};
