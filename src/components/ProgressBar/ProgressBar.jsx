import React, { useState } from 'react';
import { ProgressBarStyled } from './ProgressBar.styled';
import { ReactComponent as Icon } from './progressBar-icon.svg';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const handleButtonClick = () => {
    setProgress(progress + 10);
  };
  const getColor = () => {
    if (progress === 0) {
      return '#d7e3ff';
    } else {
      return '#9ebbff';
    }
  };

  return (
    <ProgressBarStyled>
      <div className="progress-bar-block">
        <h2 className="progress-bar-title">Today</h2>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%`, backgroundColor: getColor() }}
          >
            <div className="moving-dot" style={{ left: `${progress}%` }}></div>
          </div>
        </div>
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
        <button onClick={handleButtonClick} className="progress-bar-button">
          <span className="svg-icon">
            <Icon />
          </span>
          <span className="button-text">Add water</span>
        </button>
      </div>
    </ProgressBarStyled>
  );
};
