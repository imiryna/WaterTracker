import React, { useState } from 'react';
import { StyledDalyNorma } from './dailyNorma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeDailyNormaThunk } from '../../Redux/water/waterThunks';
import {
  todayNormaSelector,
  totalWaterAmmountSelector,
} from '../../Redux/water/waterSelectors';
import { Modal } from 'components/Modal/Modal';
import { EditDailyNormaModal } from './EditNormaModal';

export const DailyNorma = () => {
  const dispatch = useDispatch();

  const GENDER = {
    male: 'male',
    female: 'female',
  };

  const dailyNorma = useSelector(todayNormaSelector);
  const totalTodayWater = useSelector(totalWaterAmmountSelector);

  const [weight, setWeight] = useState(1);
  const [gender, setGender] = useState(GENDER.male);
  const [activeTime, setActiveTime] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const togleModal = () => {
    setShowModal(!showModal);
  };

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
        <button class="edit-btn" onClick={() => togleModal()}>Edit</button>
      </div>
      {showModal && (
        <Modal togleModal={togleModal}>
          <EditDailyNormaModal
            values={{ weight, gender, activeTime }}
            setFns={{ setWeight, setActiveTime, setGender }}
            changeDailyNorma={changeDailyNorma}
            togleModal={togleModal}
          />
        </Modal>
      )}
    </StyledDalyNorma>
  );
};
