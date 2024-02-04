import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledContainer } from './WaterModal.styled';
import { StyledWaterModal } from './WaterModal.styled';
import { addWaterThunk } from 'Store/water/waterThunks';
import { CloseSvg, MinusSvg, PlusSvg } from '../StyledTodayListIcons';
import { toggleAddWateVisibility } from 'Store/modals/modalSlice';
import { LocalizationProvider, TimeField } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { getUtcTime, parseUtcTime } from 'services/helpers/getUtcTime';
import dayjs from 'dayjs';

export const AddWaterModal = () => {
  const [amount, setAmount] = useState(50);
  const [time, setTime] = useState(dayjs(new Date()));
  const dispatch = useDispatch();

  const toggleModal = () => dispatch(toggleAddWateVisibility());

  const addWater = () => {
    dispatch(addWaterThunk({ quantity: amount, time: time.$d }));

    setAmount(50);
    setTime(new Date());

    toggleModal();
  };

  const defaultTimeValue = dayjs(new Date());

  return (
    <StyledContainer onClick={e => e.stopPropagation()}>
      <StyledWaterModal>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <p className="title">Add water</p>
          <form
            onSubmit={e => {
              e.preventDefault();
              addWater();
            }}
          >
            <p className="title2">Choose a value:</p>
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
                onChange={newTime => setTime(newTime)}
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
