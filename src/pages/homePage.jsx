import React from 'react';

import { SectionCss } from '../components/Advicer/advicer.styled';
import { TodayList } from 'components/TodayWaterList/TodayList';
import { DailyNorma } from 'components/DailyNorma/dailyNorma';
import { Calendar } from 'components/Advicer/advicer';

const HomePage = () => {
  return <SectionCss>Thes is a Home page &#128540;
    <TodayList/>
    <Calendar/>
    <DailyNorma/>
  </SectionCss>;

};
export default HomePage;
