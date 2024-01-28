import { Container } from 'components/SettingModal/SettingModal.styled';
import { StyledWaterModal } from './waterModal.styled';
import { useState } from 'react';
import { TodayListIcons } from '../TodayListIcons';
import { useDispatch } from 'react-redux';
import { changeWaterThunk } from '../../../Redux/water/waterThunks';

export const EditWaterModal = ({ togleModal, prevVal }) => {
  const [amount, setAmount] = useState(prevVal.quantity);
  const [time, setTime] = useState(new Date());
  const dispatch = useDispatch();

  const editWater = () => {
    dispatch(
      changeWaterThunk({
        newQuantity: amount,
        newTime: time,
        waterId: prevVal._id,
      })
    );
    setAmount(50);
    setTime(new Date());
    togleModal(true);
  };
  return (
    <Container onClick={e => e.stopPropagation()}>
      <StyledWaterModal>
        <p className="title">Edit the entered amount of water</p>
        <div className="previous-val-box">
          <TodayListIcons className="icon" id="cup-icon" width={36} height={36} />
          <div className="water-info">
            <span className="amount">{prevVal.quantity} ml</span>
            <span className="time">{prevVal.time}</span>
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
                {<TodayListIcons id="minus-icon" width={24} height={24} />}
              </button>
              <span className="current-water">{amount}ml</span>
              <button
                className="water-amount-btn"
                type="button"
                onClick={() => setAmount(amount + 50)}
                disabled={amount >= 5000}
              >
                {<TodayListIcons id="plus-icon" width={24} height={24} />}
              </button>
            </div>
          </label>
          <label>
            <p className="label-title">Recording time:</p>
            <input
              type="datetime-local"
              name="time"
              value={time}
              onChange={e => setTime(new Date(e.target.value))}
            />
          </label>
          <label>
            <p className="title2">Enter the value of the water used: </p>
            <input
              type="number"
              value={amount}
              onChange={e =>
                setAmount(
                  Number(e.target.value) > 5000 ? 5000 : Number(e.target.value)
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
      </StyledWaterModal>
    </Container>
  );
};
