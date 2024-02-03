import React, { useState } from 'react';
import { StyledDalyNorma } from './DailyNorma.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  totalWaterAmmountSelector,
} from 'Store/water/waterSelectors';
import { Modal } from 'components/Modal/Modal';
import { EditDailyNormaModal } from './EditNormaModal';
import { selectEditNorma } from 'Store/modals/modalSelector';
import { toggleMyDailyNormaVisibility } from 'Store/modals/modalSlice';
import { changeDailyNormaThunk } from 'Store/currentUser/currentUserThunk';
import { selectDailyNorm, selectUserData } from 'Store/currentUser/currentUserSelectors';

export const DailyNorma = () => {
  const dispatch = useDispatch();

  // const GENDER = {
  //   male: 'male',
  //   female: 'female',
  // };

  const dailyNorma = useSelector(selectDailyNorm);
  const totalTodayWater = useSelector(totalWaterAmmountSelector);

  const {gender: userGender} = useSelector(selectUserData)

  const [weight, setWeight] = useState(1);
  const [gender, setGender] = useState(userGender);
  const [activeTime, setActiveTime] = useState(1);

  const editNormaModalVisibility = useSelector(selectEditNorma)

  const toggleModal = () => dispatch(toggleMyDailyNormaVisibility())

  const changeDailyNorma = (newNorma) => {
    dispatch(changeDailyNormaThunk(newNorma));
  };

  return (
    <StyledDalyNorma>
      <p className="title">Today daily norma</p>
      <div className="norma-edit-box">
        
        <span className='norma-amount'>
          {totalTodayWater / 1000} L / {dailyNorma / 1000} L
        </span>
        <button class="edit-btn" onClick={() => toggleModal()}>Edit</button>
      </div>
      {editNormaModalVisibility && (
        <Modal toggleModal={toggleModal}>
          <EditDailyNormaModal
            values={{ weight, gender, activeTime }}
            setFns={{ setWeight, setActiveTime, setGender }}
            changeDailyNorma={changeDailyNorma}
            togleModal={toggleModal}
          />
        </Modal>
      )}
    </StyledDalyNorma>
  );
};
