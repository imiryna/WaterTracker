import React from 'react';
import { StyledDalyNorma } from './dailyNorma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeDailyNormaThunk } from '../../Redux/water/waterThunks';
import { todayNormaSelector, totalWaterAmmountSelector } from '../../Redux/water/waterSelectors';

export const DailyNorma = () => {
  const dispatch = useDispatch();

  const dailyNorma = useSelector(todayNormaSelector);
  const totalTodayWater = useSelector(
    totalWaterAmmountSelector
  );

  return (
    <StyledDalyNorma>
      <p className='title'>Today daily norma</p>
      <span>
        {totalTodayWater / 1000} L / {dailyNorma / 1000} L{' '}
      </span>
      <button
        onClick={() =>
          dispatch(changeDailyNormaThunk(prompt('Change daly norma')))
        }
      >
        {' '}
        Edit{' '}
      </button>
      {totalTodayWater >= dailyNorma && "\tdone"}
    </StyledDalyNorma>
  );
};
