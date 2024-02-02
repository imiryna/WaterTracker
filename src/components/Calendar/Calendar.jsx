import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';

import {
  StyledDay,
  StyledDiv,
  StyledList,
  StyledPercentage,
  StyledItem,
  StyledPopOver,
  StyledPopOverContainer,
  StyledPopOverDate,
  StyledPopOverText,
  StyledPopOverSpan,
  StyledContainer,
  StyledPaginationContainer,
  StyledDate,
  StyledArrowButton,
  StyledLeftArrow,
  StyledRightArrow,
  StyledTitle,
  StyledCloseIcon,
  StyledCloseButton,
} from './Calendar.styled';

// import { tempMonthStat } from 'services/helpers/tempDataForCalendar';

// import { setMonth, setYear } from "Store/monthStat/monthStatSlice";
import { selectMonthStat } from 'Store/monthStat/monthStatSelectors';

// import { getMonthStat } from "Store/monthStat/monthStatThunk";
// import { setMonth, setYear } from "Store/monthStat/monthStatSlice";
// import { selectMonth, selectMonthStat, selectYear } from "Store/monthStat/monthStatSelectors";
import { getMonthStat } from 'Store/monthStat/monthStatThunk';

export const Calendar = () => {
  //* Calendar data */
  const dispatch = useDispatch();
  // const month = useSelector(selectMonth);
  // const year = useSelector(selectYear);
  const monthStat = useSelector(selectMonthStat);
  // const monthStat = tempMonthStat;

  console.log(monthStat);

  //check device screen width
  const isDesktop = useMediaQuery('(min-width: 768px)');

  /** PopOver Logic */
  const [month, setMonth] = useState(1); //temp data
  const [year, setYear] = useState(2024); //temp data

  // open popOver hooks
  const [anchor, setAnchor] = useState(null);
  const [popOverData, setPopOverData] = useState(null);

  //PopOver open checker
  const isOpen = Boolean(anchor);

  // open/close popOver funcs
  const openPopOver = (event, day) => {
    setAnchor(event.currentTarget);
    setPopOverData(day);
  };

  const closePopOver = () => {
    setAnchor(null);
    setPopOverData(null);
  };

  // close popover handlers and eventlisteners clear
  useEffect(() => {
    const handleClickOutside = event => {
      if (anchor && !anchor.contains(event.target)) {
        closePopOver();
      }
    };
    const handleEscPress = event => {
      if (event.code === 'Escape') {
        closePopOver();
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscPress);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [anchor]);

  // // close popover via button handlers
  // const handleCloseButtonClick = event => {
  //   closePopOver();
  // };

  //* Pagination logic */

  // Get month name
  const monthName = month.toLocaleString('en-US', { month: 'long' });

  //Fetch information when month changes

  useEffect(() => {
    dispatch(getMonthStat({ month, year }));
  }, [dispatch, month, year]);

  // Pagination handlers
  const handlePreviousMonth = () => {
    const previousMonth = month - 1 <= 0 ? 12 : month - 1;
    const newYear = previousMonth === 12 ? year - 1 : year;
    // dispatch(setMonth(previousMonth));
    // dispatch(setYear(newYear));
    setMonth(previousMonth);
    setYear(newYear);
  };

  const handleNextMonth = () => {
    const nextMonth = month + 1 > 12 ? 1 : month + 1;
    const newYear = nextMonth === 1 ? year + 1 : year;
    // dispatch(setMonth(nextMonth));
    // dispatch(setYear(newYear));
    setMonth(nextMonth);
    setYear(newYear);
  };

  return (
    <StyledDiv>
      <StyledContainer>
        <StyledTitle>Month</StyledTitle>
        <StyledPaginationContainer>
          <StyledArrowButton onClick={handlePreviousMonth}>
            <StyledLeftArrow />
          </StyledArrowButton>
          <StyledDate>
            {monthName}, {year}
          </StyledDate>
          <StyledArrowButton onClick={handleNextMonth}>
            <StyledRightArrow />
          </StyledArrowButton>
        </StyledPaginationContainer>
      </StyledContainer>
      <StyledList>
        {monthStat.map(day => {
          return (
            <StyledItem
              key={day.id}
              aria-owns={isOpen ? 'calendar-popover' : undefined}
              aria-haspopup="true"
              onClick={event => {
                openPopOver(event, day);
              }}
            >
              <StyledDay $percentage={day.percentage}>{day.date}</StyledDay>
              <StyledPercentage>{day.percentage}</StyledPercentage>
            </StyledItem>
          );
        })}
      </StyledList>
      <StyledPopOver
        id="calendar-popover"
        open={isOpen}
        onClose={closePopOver}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'top',
          horizontal: isDesktop ? 'left' : 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: isDesktop ? 'right' : 'center',
        }}
        disableRestoreFocus
      >
        {popOverData && (
          <StyledPopOverContainer>
            <StyledCloseButton>
              <StyledCloseIcon />
            </StyledCloseButton>
            <StyledPopOverDate>
              {popOverData.date}, {monthName}
            </StyledPopOverDate>
            <StyledPopOverText>
              Daily norma :{' '}
              <StyledPopOverSpan>{popOverData.norma}L</StyledPopOverSpan>
            </StyledPopOverText>
            <StyledPopOverText>
              Fulfillment of the daily norm:{' '}
              <StyledPopOverSpan>{popOverData.percentage}%</StyledPopOverSpan>
            </StyledPopOverText>
            <StyledPopOverText>
              How many servings of water:{' '}
              <StyledPopOverSpan>{popOverData.servings}</StyledPopOverSpan>
            </StyledPopOverText>
          </StyledPopOverContainer>
        )}
      </StyledPopOver>
    </StyledDiv>
  );
};
