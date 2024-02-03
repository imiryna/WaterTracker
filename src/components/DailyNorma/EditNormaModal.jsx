import { useState } from 'react';
import { StyledEditNormaModal } from './EditNormaModal.styled';
import { CloseSvg } from 'components/TodayWaterList/StyledTodayListIcons';

export const EditDailyNormaModal = ({
  togleModal,
  values: { weight, gender, activeTime },
  setFns: { setWeight, setActiveTime, setGender },
  changeDailyNorma,
}) => {
  const calculateRequiredWater = () => {
    if (gender === 'male') {
      return Number((weight * 0.04 + activeTime * 0.6).toFixed(1));
    } else {
      return Number((weight * 0.03 + activeTime * 0.4).toFixed(1));
    }
  };
  const [newNorma, setNewNorma] = useState(calculateRequiredWater());

  return (
    <StyledEditNormaModal>
      <p className="main-title">My daily norma</p>
      <div className="functions">
        <div className="function for-woman">
          For girl: <span className="math-fn">V=(M*0,03) + (T*0,4)</span>
        </div>
        <div className="function for-man">
          For man: <span className="math-fn">V=(M*0,04) + (T*0,6)</span>
        </div>
      </div>
      <p className="description">
        <span className="star">*</span> V is the volume of the water norm in
        liters per day, M is your body weight, T is the time of active sports,
        or another type of activity commensurate in terms of loads (in the
        absence of these, you must set 0)
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();
          changeDailyNorma(newNorma * 1000);

          togleModal();
        }}
      >
        <label className="gender">
          <p className="label-title">Calculate your rate:</p>
          <div className="choose-gender">
            <label className="gender-label">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={e => {
                  setGender(e.target.value);
                }}
                checked={gender === 'female'}
              />{' '}
              For Woman
            </label>
            <label className="gender-label">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={e => {
                  setGender(e.target.value);
                }}
                checked={gender === 'male'}
              />{' '}
              For Man
            </label>
          </div>
        </label>
        <label className="weight">
          <p className="label-title2">Your weight in kilograms:</p>
          <input
            type="number"
            name="weight"
            min={1}
            value={weight}
            onChange={e => setWeight(e.target.value < 0 ? 0 : e.target.value)}
          />
        </label>
        <label className="active-time-label">
          <p className="label-title2">
            The time of active participation in sports or other activities with
            a high physical. load in hours:
          </p>
          <input
            type="number"
            name="activeTime"
            value={activeTime}
            onChange={e =>
              setActiveTime(
                e.target.value > 24
                  ? 24
                  : e.target.value < 0
                  ? 0
                  : e.target.value
              )
            }
          />
        </label>
        <p className="label-title2 reqired-amount">
          The required amount of water in liters per day:
          <span className="selected">  {calculateRequiredWater()} L</span>
        </p>
        <label>
          <p className="label-title">
            Write down how much water you will drink:
          </p>
          <input
            type="number"
            className="new-norma"
            step={0.1}
            value={newNorma}
            onChange={e => setNewNorma(e.target.value)}
          />
        </label>
        <div className="align-btn">
          <button>Save</button>
        </div>
      </form>
      <button className="close-btn" onClick={togleModal}>
          <CloseSvg />
        </button>
    </StyledEditNormaModal>
  );
};
