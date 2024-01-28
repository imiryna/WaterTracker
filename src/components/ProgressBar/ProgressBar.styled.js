import styled from 'styled-components';

export const ProgressBarStyled = styled.div`
  width: 280px;
  margin-top: 100px;
  height: 82px;

  .progress-bar-title {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--primery-blue);
  }

  .progress-bar {
    position: relative;
    width: 256px;
    height: 8px;
    border-radius: 10px;
    background-color: var(--secondaru-color);
    margin-bottom: 20px;
  }

  .progress-bar-fill {
    max-width: 256px;
    height: 100%;
    border-radius: 10px;
    background-color: var(--secondary-color-4);
  }

  .progress-bar-lines {
    background-color: var(--secondary-color-4);
    width: 1px;
    height: 8px;
    border-top: 1px;
    margin-bottom: 4px;
  }

  .progress-bar-labels {
    display: flex;
  }

  .progress-bar-label {
    color: var(--primery-blue);
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    margin-bottom: 10px;
  }

  .moving-dot {
    position: absolute;
    top: -3.5px;
    left: 50px;
    width: 15px;
    height: 15px;
    background-color: var(--primery-white);
    border: solid 1px var(--primery-blue);
    border-radius: 50%;
    transform: translateX(-85%);
    transition: width 0.5s ease-out;
  }
`;
