import React from 'react';

import { TodayList } from 'components/TodayWaterList/TodayList';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { Calendar } from 'components/Calendar/Calendar';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import {
  StyledHomePageWrapper,
  StyledLeftContainer,
  StyledRightContainer,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHomePageWrapper>
      <StyledLeftContainer>
        <DailyNorma />
        <ProgressBar />
      </StyledLeftContainer>
      <StyledRightContainer>
        <TodayList />
        <Calendar />
      </StyledRightContainer>
    </StyledHomePageWrapper>
  );
};
export default HomePage;
