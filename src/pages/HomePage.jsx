import React from 'react';

import { TodayList } from 'components/TodayWaterList/TodayList';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { Calendar } from 'components/Calendar/Calendar';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import {
  StyledHomePageWrapper,
  StyledLeftContainer,
  StyledRightContainer,
  SectionCss,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <SectionCss>
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
    </SectionCss>
  );
};
export default HomePage;
