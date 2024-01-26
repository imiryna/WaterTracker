import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from 'components/Navigation/navigation';
import Home from 'pages/homePage';

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
