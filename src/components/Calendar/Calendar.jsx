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
  StyledLeftArrow,
  StyledRightArrow,
  StyledTitle,
  StyledCloseIcon,
  StyledCloseButton,
  StyledArrowButtonRight,
  StyledArrowButtonLeft,
} from './Calendar.styled';


import { selectIsLoading, selectMonthStat } from "Store/monthStat/monthStatSelectors";
import { getMonthStat } from 'Store/monthStat/monthStatThunk';
import { selectRegisterDate } from 'Store/currentUser/currentUserSelectors';
import { Loading } from 'components/Loader/Loader.styled';

export const Calendar = () => {

  //check device screen width
  const isDesktop = useMediaQuery('(min-width: 768px)');

  //* Date picker hooks */
  
  const [month, setMonth] = useState(new Date().getMonth()+1);
  const [year, setYear] = useState(new Date().getFullYear());

  // Fetch month statistic
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMonthStat({ month, year }));
  }, [dispatch, month, year]);

  //* User data */
  const registerDate = useSelector(selectRegisterDate);
  const registerYear = Number(registerDate.split('-')[0]);
  const registerMonth = Number(registerDate.split('-')[1]);
  
  // Get month statistic
  const stats = useSelector(selectMonthStat);
  // const monthStat = tempMonthStat;


  /** PopOver Logic */

  // set anchor and popOver content hooks
  const [anchor, setAnchor] = useState(null);
  const [popOverData, setPopOverData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const id = isOpen ? 'simple-popover' : undefined;

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


  // Open and close popover logic
  const openPopOver = (event, item) => {
    if (item.quantity === null) return;
    
      setIsOpen(true);
      setAnchor(event.currentTarget);
      setPopOverData(item);
  };

  const closePopOver = (event, reason) => {
      setIsOpen(false);
      setAnchor(null);
      setPopOverData(null);
    
  };

  //* Pagination logic */

  // Pagination handlers
  const handlePreviousMonth = () => {
    const previousMonth = month - 1 <= 0 ? 12 : month - 1;
    const newYear = previousMonth === 12 ? year - 1 : year;
    setMonth(previousMonth);
    setYear(newYear);
  };

  const handleNextMonth = () => {
    const nextMonth = month + 1 > 12 ? 1 : month + 1;
    const newYear = nextMonth === 1 ? year + 1 : year;
    setMonth(nextMonth);
    setYear(newYear);
  };
    
  // Current month and year
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  //Need to hide pagination controllers checker
  const hideRightArrow = () => {
      if(month === currentMonth && year === currentYear){
        return true
      } else{
        return false
      }
  }

  const hideLeftArrow = () => {
    if(month === registerMonth && year === registerYear){
      return true;
    } else{
      return false;
    }
  }

  

  // Get month name

  const date = new Date(); 
  date.setMonth(month - 1);
  const monthName = date.toLocaleString('en-US', { month: 'long' });



  // Render

  return isLoading ? 
  <Loading/> :

    <StyledDiv>
      <StyledContainer>
        <StyledTitle>Month</StyledTitle>
        <StyledPaginationContainer>
          <StyledArrowButtonLeft $hideButton = {hideLeftArrow()} onClick={handlePreviousMonth}>
            <StyledLeftArrow />
          </StyledArrowButtonLeft>
          <StyledDate>
            {monthName}, {year}
          </StyledDate>
          <StyledArrowButtonRight $hideButton = {hideRightArrow()} onClick={handleNextMonth}>
            <StyledRightArrow />
          </StyledArrowButtonRight>
        </StyledPaginationContainer>
      </StyledContainer>
      <StyledList>
        {stats.map(item => {
          return (
            <StyledItem
              key={item.date.day}
              aria-owns={isOpen ? 'calendar-popover' : undefined}
              aria-haspopup="true"
              onClick={event => {
                openPopOver(event, item);
              }}
            >
              <StyledDay $percentage={item.percent}>{item.date.day}</StyledDay>
              <StyledPercentage>{item.percent}</StyledPercentage>
            </StyledItem>
          );
        })}
      </StyledList>
      <StyledPopOver
        id={id}
        open={isOpen}
        onClose={(event, reason) => {closePopOver(event, reason)}}
        anchorEl={anchor}
        placement={isDesktop ? "top-start" : "top"}
      >
        {popOverData && (
          <StyledPopOverContainer>
            <StyledCloseButton onClick={closePopOver}>
              <StyledCloseIcon />
            </StyledCloseButton>
            <StyledPopOverDate>
              {popOverData.date.day}, {monthName}
            </StyledPopOverDate>
            <StyledPopOverText>
              Daily norma :{' '}
              <StyledPopOverSpan>{popOverData.dailyNorm / 1000}L</StyledPopOverSpan>
            </StyledPopOverText>
            <StyledPopOverText>
              Fulfillment of the daily norm:{' '}
              <StyledPopOverSpan>{popOverData.percent}%</StyledPopOverSpan>
            </StyledPopOverText>
            <StyledPopOverText>
              How many servings of water:{' '}
              <StyledPopOverSpan>{popOverData.quantity}</StyledPopOverSpan>
            </StyledPopOverText>
          </StyledPopOverContainer>
        )}
      </StyledPopOver>      
    </StyledDiv>
  
};
