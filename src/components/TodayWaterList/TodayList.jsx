import {
  addWaterThunk,
} from '../../Redux/water/waterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { StyledWaterList } from './TodayList.styled';
import { createWaterCardMarcup } from './WaterCard';
import { TodayListIcons } from './TodayListIcons';

export const TodayList = () => {
  const dispatch = useDispatch();

  const waterArr = useSelector(state => state.todayWater.waterArr);

  //Creating marcup arr
  const marcup = waterArr.map(item => {
    const waterCardId = item._id;

    // Calculating adding time
    const waterAddTime = `${
      item.time.getHours() >= 10
        ? item.time.getHours()
        : '0' + item.time.getHours()
    }:${
      item.time.getMinutes() >= 10
        ? item.time.getMinutes()
        : '0' + item.time.getMinutes()
    } ${item.time.getHours() > 12 ? 'PM' : 'AM'}`;

    const waterQuantity = item.quantity;

    return createWaterCardMarcup({
      waterAddTime,
      waterCardId,
      waterQuantity,
      dispatch,
    });
  });

  return (
    <StyledWaterList>
      {marcup}
      <button
      className='add-btn'
        onClick={() => {
          dispatch(
            addWaterThunk({ quantity: prompt('Quantity'), time: new Date() })
          );
        }}
      ><TodayListIcons id="plus-icon" width={24} height={24}/>Add Water</button>
    </StyledWaterList>
  );
};


