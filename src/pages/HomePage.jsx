import React, { useEffect } from 'react';

import { TodayList } from 'components/TodayWaterList/TodayList';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { Calendar } from 'components/Calendar/Calendar';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { StyledHomePageWrapper, StyledLeftContainer, StyledRightContainer } from './HomePage.styled';
import { useDispatch } from 'react-redux';
import { getCurrentUserThunk } from 'Store/currentUser/currentUserThunk';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk())
  })
  return (
    <main>
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
      
    </main>
  );
};
export default HomePage;
