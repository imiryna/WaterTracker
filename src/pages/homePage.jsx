import React from 'react';
import { SectionCss } from 'components/Advicer/advicer.styled';
import { Calendar } from 'components/Calendar/Calendar';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';



const HomePage = () => {
  return (
    <SectionCss>
      Thes is a Home page;
      <Calendar />
      <ProgressBar />
    </SectionCss>
  );
};
export default HomePage;
