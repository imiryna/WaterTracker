import React from 'react';
import { StyledDalyNorma } from './dailyNorma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeDalyNormaThunk } from '../../Redux/water/waterReducer';

export const DailyNorma = () => {
  const dispatch = useDispatch();

  const dailyNorma = useSelector(state => state.todayWater.todayNorma);
  const totalTodayWater = useSelector(
    state => state.todayWater.totalWaterAmmount
  );

  return (
    <StyledDalyNorma>
      <p className='title'>Today daily norma</p>
      <span>
        {totalTodayWater / 1000} L / {dailyNorma / 1000} L{' '}
      </span>
      <button
        onClick={() =>
          dispatch(changeDalyNormaThunk(prompt('Change daly norma')))
        }
      >
        {' '}
        Edit{' '}
      </button>
      {totalTodayWater >= dailyNorma && "\tdone"}
    </StyledDalyNorma>
  );
};
