import React from 'react';

import { SectionCss } from '../components/Advicer/Advicer.styled';
import { TodayList } from 'components/TodayWaterList/TodayList';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { Calendar } from 'components/Calendar/Calendar';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';

const HomePage = () => {
  return (
    <SectionCss>
      <TodayList />
      <Calendar />
      <DailyNorma />
      <ProgressBar />
    </SectionCss>
  );
};
export default HomePage;
