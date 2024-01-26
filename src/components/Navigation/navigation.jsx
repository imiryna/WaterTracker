import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
