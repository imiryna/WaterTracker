import React from 'react';

import { TodayList } from 'components/TodayWaterList/TodayList';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { Calendar } from 'components/Calendar/Calendar';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import {
  StyledHomePageWrapper,
  StyledRightContainer,
  ButtleImgCss,
  Wraper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHomePageWrapper>
      <Wraper>
        <DailyNorma />
        <div>
          <ButtleImgCss />
          <ProgressBar />
        </div>
      </Wraper>
      <StyledRightContainer>
        <TodayList />
        <Calendar />
      </StyledRightContainer>
    </StyledHomePageWrapper>
  );
};
export default HomePage;
