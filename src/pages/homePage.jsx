import React from 'react';
import { SectionCss } from 'components/Advicer/advicer.styled';
import { Calendar } from 'components/Calendar/Calendar';

const HomePage = () => {
  return (
    <SectionCss>
      Thes is a Home page;
      <Calendar />
    </SectionCss>
  );
};
export default HomePage;
