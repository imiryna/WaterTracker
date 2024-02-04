import React, { useState } from 'react';
import { ProgressBarStyled } from './ProgressBar.styled';
import { ReactComponent as Icon } from './progressBar-icon.svg';
import { useSelector } from 'react-redux';
import {
  todayNormaSelector,
  totalWaterAmmountSelector,
} from 'Store/water/waterSelectors';
import { Slider } from '@mui/material';
import { Modal } from 'components/Modal/Modal';
import { AddWaterModal } from 'components/TodayWaterList/modals/AddWaterModal';
import { EditWaterModal } from 'components/TodayWaterList/modals/EditWaterModal';

export const ProgressBar = () => {
  const waterAmount = useSelector(totalWaterAmmountSelector);
  const waterNorma = useSelector(todayNormaSelector);
  const progress = (waterAmount / waterNorma) * 100;

 const [showAddModal, setShowAddModal] = useState(false);
 const toggleAddModal = () => {
   setShowAddModal(!showAddModal);
  };
  
  const [showEditModal, setShowEditModal] = useState(false);
  const togleEditModal = () => setShowEditModal(!showEditModal);
  const [currentEditObj] = useState(null);

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
          onClick={() => {
            toggleAddModal();
          }}
        >
          {showAddModal && (
            <Modal togleModal={toggleAddModal}>
              <AddWaterModal togleModal={toggleAddModal} />
            </Modal>
          )}
          {showEditModal && (
            <Modal togleModal={togleEditModal}>
              <EditWaterModal
                prevVal={currentEditObj}
                togleModal={togleEditModal}
              />
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
