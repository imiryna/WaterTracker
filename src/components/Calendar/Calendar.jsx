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
} from "./Calendar.styled";

// import { setMonth, setYear } from "Redux/monthStat/monthStatSlice";
// import { selectMonth, selectMonthStat, selectYear } from "Redux/monthStat/monthStatSelectors";
// import { getMonthStat } from "Redux/monthStat/monthStatThunk";

export const Calendar = () => {

  const dispatch = useDispatch();

  //* Calendar data */
    // const month = useSelector(selectMonth);
    // const year = useSelector(selectYear);
    const month = 1 //temp data
    const year = 2222 //temp data

  // const monthStat = useSelector(selectMonthStat);
  const monthStat = [{id:1, day:1, norma: 2, percentage: 100, servings: 3}]

  //check device screen width
  const isDesktop = useMediaQuery('(min-width: 768px)');


  /** PopOver Logic */  

    const [anchor, setAnchor] = useState(null);
    const [popOverData, setPopOverData] = useState(null)

  //PopOver open checker
  const isOpen = Boolean(anchor);
  
  // open popOver handlers
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
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscPress);


    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [anchor]);


 

    //* Pagination logic */
  
    // Get month name
    const monthName = month.toLocaleString('en-US', { month: 'long' }); 

    //Fetch information when month changes
    // useEffect(() => {
    //   dispatch(getMonthStat({month, year}))
    // }, [dispatch, month, year])

    // Pagination handlers
    const handlePreviousMonth = () => {
        const previousMonth = month - 1 < 0 ? 11 : month - 1; 
        const newYear = previousMonth === 11 ? year - 1 : year;
        // dispatch(setMonth(previousMonth));
        // dispatch(setYear(newYear));
    };
    
    const handleNextMonth = () => {
        const nextMonth = month + 1 > 11 ? 0 : month + 1;
        const newYear = nextMonth === 0 ? year + 1 : year;
        // dispatch(setMonth(nextMonth));
        // dispatch(setYear(newYear));
    };
    
    return(
      <StyledDiv>
        <StyledContainer>
          <StyledTitle>Month</StyledTitle>
          <StyledPaginationContainer>
            <StyledArrowButton onClick={handlePreviousMonth}><StyledLeftArrow/></StyledArrowButton>
            <StyledDate>{monthName}, {year}</StyledDate>
            <StyledArrowButton onClick={handleNextMonth}><StyledRightArrow/></StyledArrowButton>
        </StyledPaginationContainer>
        </StyledContainer>
          <StyledList>
          {monthStat.map(day => {
            return(
              <StyledItem 
              key={day.id}
              aria-owns={isOpen ? 'calendar-popover' : undefined}
              aria-haspopup="true"
              onClick={event => {openPopOver(event, day)}}
              >
                <StyledDay percentage={day.percentage}>{day.day}</StyledDay>
                <StyledPercentage>{day.percentage}</StyledPercentage>

              </StyledItem>
              )
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
                  <StyledCloseIcon/>
                </StyledCloseButton>
                <StyledPopOverDate>
                  {popOverData.day}, {monthName}
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
