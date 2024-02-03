import styled from 'styled-components';

export const StyledEditNormaModal = styled.div`
  background-color: var(--primery-white);
  padding: 32px 24px;
  position: relative;
  width: 100%;
  @media only screen and (min-width: 768px) {
     max-width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 592px;

  }

  font-size: 16px;
  label {
    display: block;
  }
  .main-title {
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 24px;
  }
  .functions {
    display: flex;
    gap: 24px;
    @media only screen and (max-width: 767px) {
       flex-direction: column;
    }
    .function {
      font-size: 16px;
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .math-fn {
        font-size: 18px;
        color: var(--primery-blue);
      }
    }
  }
  .description {
    font-size: 12px;
    padding: 10px;
    color: #8f8f8f;
    border: 1px solid var(--secondaru-color);
    border-radius: 10px;
    margin-bottom: 24px;
    .star {
      color: var(--primery-blue);
    }
  }
  .label-title {
    font-size: 18px;
    margin-bottom: 16px;
  }
  .gender {
    margin-bottom: 16px;
    .choose-gender {
      display: flex;
      gap: 24px;
      .gender-label {
        display: flex;
        gap: 8px;
        input {
        }
      }
    }
  }
  .label-title2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  input[type='number'] {
    padding: 12px 10px;
    font-size: 16px;
    line-height: 1.25;
    width: 100%;
    color: var(--primery-blue);
    border: 1px solid var(--secondaru-color);
    border-radius: 6px;
  }
  .weight {
    margin-bottom: 16px;
  }
  .active-time-label {
    margin-bottom: 16px;
  }
  .reqired-amount {
    margin-bottom: 24px;

    .selected {
      font-size: 18px;
      color: var(--primery-blue);
    }
  }
  .new-norma {
    margin-bottom: 24px;
  }
  .align-btn {
    display: flex;
    justify-content: right;
    button {
      font-size: 18px;
      color: var(--primery-white);
      background-color: var(--primery-blue);
      padding: 10px 30px;
      width: 160px;
      border-radius: 10px;
      @media only screen and (max-width: 767px) {
        width: 100%;
        font-size: 16px;
        padding: 8px 30px;
      }
    }
  }
  .close-btn {
    position: absolute;
    top: 36px;
    right: 24px;
    background: transparent;
    border: none;
  }
`;
