import styled from 'styled-components';


// export const CustomSliderStyles = styled.div`


// `
export const ProgressBarStyled = styled.div`
  width: 280px;
  height: 82px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 704px;
    height: 90px;
    flex-direction: row;
    gap: 12px;
  }

  @media (min-width: 1440px) {
    width: 592px;
    height: 90px;
    gap: 23px;
  }

  @media (min-width: 768px) {
    .progress-bar-block {
      width: 356px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-block {
      width: 391px;
    }
  }

  .progress-bar-title {
    font-family: var(--primery-font);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--primery-blue);
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    .progress-bar-title {
      margin-bottom: 19px;
    }
  }

  .progress-bar {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    margin-bottom:7px;
     }

  @media (min-width: 768px) {
    .progress-bar {
      width: 325px;
      margin-left: 11px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar {
      width: 360px;
    }
  }


  @media (min-width: 768px) {
    .progress-bar-fill {
      max-width: 325px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-fill {
      max-width: 360px;
    }
  }

  .progress-bar-lines {
    display: flex;
    gap: 126px;
    justify-content: center;
    margin-bottom: 4px;
  }

  @media (min-width: 768px) {
    .progress-bar-lines {
      gap: 161px;
      justify-content: start;
      padding-left: 11px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-lines {
      gap: 178px;
    }
  }

  .progress-bar-line {
    background-color: var(--secondary-color-4);
    width: 1px;
    height: 8px;
    border-top: 1px;
    margin-bottom: 4px;
  }

  .progress-bar-labels {
    display: flex;
    width: 280px;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    .progress-bar-labels {
      width: 356px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-labels {
      width: 391px;
    }
  }

  .progress-bar-label {
    width: 40px;
    display: block;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: var(--primery-blue);
  }

  .progress-bar-label-0 {
    width: 22px;
    margin-right: 93px;
  }

  @media (min-width: 768px) {
    .progress-bar-label-0 {
      margin-right: 127px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-label-0 {
      margin-right: 150px;
      width: 22px;
    }
  }

  .progress-bar-label-50 {
    width: 50px;
    margin-right: 85px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  @media (min-width: 768px) {
    .progress-bar-label-50 {
      margin-right: 117px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-label-50 {
      margin-right: 124px;
    }
  }


  .progress-bar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 36px;
    border-radius: 10px;
    gap: 10px;
    color: var(--primery-white);
    font-family: var(--primery-font);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    background-color: var(--primery-blue);
  }

  @media (min-width: 768px) {
    .progress-bar-button {
      width: 336px;
      height: 44px;
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-button {
      width: 178px;
    }
  }

  .svg-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-text {
    width: 94px;
  }

  @media (min-width: 1440px) {
    .button-text {
      width: 84px;
    }
  }

  @media (min-width: 768px) {
    .button-block {
      padding-top: 25px;
    }
  }
`;
