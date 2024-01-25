import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/navigation/navigation';

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}></Route>
      </Routes>
    </Suspense>
  );
};
