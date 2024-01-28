import React, { useState } from 'react';
import { ProgressBarStyled } from './ProgressBar.styled';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const handleButtonClick = () => {
    setProgress(progress + 10);
  };
  const handleButtonReset = () => {
    setProgress(0);
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
      <h2 className='progress-bar-title'>Today</h2>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, backgroundColor: getColor() }}
        >
          <div className="moving-dot" style={{ left: `${progress}%` }}></div>
        </div>
      </div>
      <ul className='progress-bar-labels'>
        <li>
          <div className="progress-bar-lines"></div>
          <div className="progress-bar-label">{progress}%</div>
        </li>
        <li>
          <div className="progress-bar-lines"></div>
          <div className="progress-bar-label">{progress}%</div>
        </li>
        <li>
          <div className="progress-bar-lines"></div>
          <div className="progress-bar-label">{progress}%</div>
        </li>
      </ul>

      <button onClick={handleButtonClick}>Progress</button>
      <button onClick={handleButtonReset}>Reset</button>
    </ProgressBarStyled>
  );
};
