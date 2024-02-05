import { StyledContainer } from './WaterModal.styled';
import { StyledWaterModal } from './WaterModal.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeWaterThunk } from 'Store/water/waterThunks';
import { CloseSvg, CupSvg, MinusSvg, PlusSvg } from '../StyledTodayListIcons';
import { parseUtcTime } from 'services/helpers/getUtcTime';
import { toggleEditWateVisibility } from 'Store/modals/modalSlice';
import { LocalizationProvider, TimeField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const EditWaterModal = ({ prevVal }) => {
  const [amount, setAmount] = useState(prevVal.quantity);
  const [time, setTime] = useState(dayjs(new Date()));
  const defaultTimeValue = dayjs(new Date());

  const dispatch = useDispatch();

  const toggleModal = () => dispatch(toggleEditWateVisibility());

  const editWater = () => {
    dispatch(
      changeWaterThunk({
        newQuantity: amount,
        newTime: time.$d,
        waterId: prevVal._id,
      })
    );
    setAmount(50);
    setTime(new Date());
    toggleModal();
  };

  const prevTime = parseUtcTime(prevVal.time);

  if (prevTime.hours >= 12) {
    prevTime.hours = prevTime.hours - 12;
    prevTime.dayPart = 'PM';
  } else {
    prevTime.dayPart = 'AM';
  }
  return (
    <StyledContainer onClick={e => e.stopPropagation()}>
      <StyledWaterModal>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <p className="title">Edit the entered amount of water</p>
          <div className="previous-val-box">
            <CupSvg />
            <div className="water-info">
              <span className="amount">{prevVal.quantity} ml</span>
              <span className="time">{`${prevTime.hours}:${prevTime.minutes} ${prevTime.dayPart}`}</span>
            </div>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              editWater();
            }}
          >
            <p className="title2">Correct entered data:</p>
            <label>
              <p className="label-title">Amount of water:</p>
              <div className="water-amount-btn-box">
                <button
                  className="water-amount-btn"
                  type="button"
                  onClick={() => setAmount(amount - 50)}
                  disabled={amount <= 0}
                >
                  {<MinusSvg />}
                </button>
                <span className="current-water">{amount}ml</span>
                <button
                  className="water-amount-btn"
                  type="button"
                  onClick={() => setAmount(amount + 50)}
                  disabled={amount >= 5000}
                >
                  {<PlusSvg />}
                </button>
              </div>
            </label>
            <label>
              <p className="label-title">Recording time:</p>
              <TimeField
                value={time}
                onChange={(newTime) => setTime(newTime)}
                defaultValue={defaultTimeValue}
                format="hh:mm a"
              />
            </label>
            <label>
              <p className="title2">Enter the value of the water used: </p>
              <input
                type="number"
                value={amount}
                onChange={e =>
                  setAmount(
                    Number(e.target.value) > 5000
                      ? 5000
                      : Number(e.target.value)
                  )
                }
                min={1}
                max={5000}
              />
            </label>
            <div className="result">
              <span>{amount}ml</span>
              <button type="submit" disabled={amount <= 0}>
                Save
              </button>
            </div>
          </form>
          <button className="close-btn" onClick={toggleModal}>
            <CloseSvg />
          </button>
        </LocalizationProvider>
      </StyledWaterModal>
    </StyledContainer>
  );
};
