import styled from 'styled-components';

export const StyledTitle = styled.h2`
font-family: var(--primery-font);
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--primery-blue);
  margin-bottom: 8px;

  @media (min-width: 768px) {
      margin-bottom: 19px;
  }

`

export const StyledBarWithComponents = styled.div`
width: 100%;
`

export const ProgressBarStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 768px){
    flex-direction: row;
    gap: 32px;
    align-items: flex-start;
  }


  @media (min-width: 1440px) {
    gap: 43px;
  }

  .progress-bar {
    display: flex;
    margin: 0 auto;
    width: 100%;
  }

  @media (min-width: 768px) {
    .progress-bar {
      margin-left: 11px;
    }
  }

  .progress-bar-lines {
    display: flex;
    gap: 126px;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 4px;
    width: 100%;
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
    width: 100%;
    justify-content: space-between;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    .progress-bar-labels {
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-labels {
    }
  }

  .progress-bar-label {
    display: block;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: var(--primery-blue);
  }

  .progress-bar-label-0 {
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
    }
  }

  .progress-bar-label-50 {
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
    width: 100%;
    min-width: 280px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 10px 30px;
    border-radius: 10px;
    gap: 10px;
    color: var(--primery-white);
    font-family: var(--primery-font);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    background-color: var(--primery-blue);
    margin-top: 16px;

    &:hover{
      box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);

    }
  }

  @media (min-width: 768px) {
    .progress-bar-button {
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media (min-width: 1440px) {
    .progress-bar-button {
      min-width: 178px;
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
  }

  @media (min-width: 1440px) {
    .button-text {
    }
  }

  @media (min-width: 768px) {
    .button-block {
      padding-top: 25px;
    }
  }
`;
