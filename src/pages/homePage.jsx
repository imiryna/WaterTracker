import React from 'react';
import { SectionCss } from '../components/Advicer/advicer.styled';
import { TodayList } from 'components/TodayWaterList/TodayList';
import { DailyNorma } from 'components/DailyNorma/dailyNorma';

const HomePage = () => {
  return <SectionCss>Thes is a Home page &#128540;
    <TodayList/>
    <DailyNorma/>
  </SectionCss>;
};
export default HomePage;
