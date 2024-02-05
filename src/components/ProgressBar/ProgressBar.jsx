import React from 'react';
import { ProgressBarStyled } from './ProgressBar.styled';
import { ReactComponent as Icon } from './progressBar-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { totalWaterAmmountSelector } from 'Store/water/waterSelectors';
import { Slider } from '@mui/material';
import { Modal } from 'components/Modal/Modal';
import { AddWaterModal } from 'components/TodayWaterList/modals/AddWaterModal';
import { selectDailyNorm } from 'Store/currentUser/currentUserSelectors';
import { toggleAddWateVisibility } from 'Store/modals/modalSlice';
import { selectAddWater } from 'Store/modals/modalSelector';

export const ProgressBar = () => {
  const waterAmount = useSelector(totalWaterAmmountSelector);
  const waterNorma = useSelector(selectDailyNorm);
  const progress = (waterAmount / waterNorma) * 100;
  const dispatch = useDispatch();

  const showAddModal = useSelector(selectAddWater);

  const CustomSliderStyles = {
    width: '256px',
    padding: '0',
    '& .MuiSlider-thumb': {
      color: '#ffffff',
      border: '1px solid #407bff',
      width: '14px',
      height: '14px',
    },
    '& .MuiSlider-track': {
      color: '#9ebbff',
      height: '8px',
    },
    '& .MuiSlider-rail': {
      height: '8px',
      color: '#9ebbff',
    },
  };

  return (
    <ProgressBarStyled>
      <div className="progress-bar-block">
        <h2 className="progress-bar-title">Today</h2>
        <Slider
          className="progress-bar"
          sx={CustomSliderStyles}
          value={progress}
        />
        <ul className="progress-bar-lines">
          <li className="progress-bar-line"></li>
          <li className="progress-bar-line"></li>
          <li className="progress-bar-line"></li>
        </ul>
        <ul className="progress-bar-labels">
          <li className="progress-bar-label-0 progress-bar-label">0%</li>
          <li className="progress-bar-label-50 progress-bar-label">50%</li>
          <li className="progress-bar-label-100 progress-bar-label">100%</li>
        </ul>
      </div>
      <div className="button-block">
        <button
          className="progress-bar-button"
          onClick={() => dispatch(toggleAddWateVisibility())}
        >
          {showAddModal && (
            <Modal toggleModal={toggleAddWateVisibility}>
              <AddWaterModal togleModal={toggleAddWateVisibility} />
            </Modal>
          )}

          <span className="svg-icon">
            <Icon />
          </span>
          <span className="button-text">Add water</span>
        </button>
      </div>
    </ProgressBarStyled>
  );
};
