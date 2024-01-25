import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Section>
        <NavCss>
          <Navlink to="/">Home</Navlink>
        </NavCss>
      </Section>
      <Outlet />
    </>
  );
};

export default Navigation;
