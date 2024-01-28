import styled from 'styled-components';

export const ProgressBarStyled = styled.div`
  width: 360px;
  margin-top: 100px;

  .progress-bar {
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: var(--secondaru-color);
  }

  .progress-bar-fill {
    max-width: 360px;
    height: 100%;
    border-radius: 10px;
    background-color: var(--secondary-color-4);
  }

  .progress-bar-label {
    color: var(--primery-blue);
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
  }

  .moving-dot {
    position: absolute;
    top: -2.5px;
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
