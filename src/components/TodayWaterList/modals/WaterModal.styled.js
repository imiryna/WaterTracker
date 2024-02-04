import styled from 'styled-components';
// ZooBeeN added - fix problem
export const StyledContainer = styled.div`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  display: inline-flex;
  padding: 32px 24px;
  flex-direction: column;
  background: var(--Primery-Color-White, #fff);
  border-radius: 10px;
`;

export const StyledWaterModal = styled.div`
  width: 256px;
  @media only screen and (min-width: 768px) {
    width: 656px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }

  position: relative;
  .title {
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 24px;
  }
  .title2 {
    font-size: 18px;
    line-height: 1.1;
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 24px;
    .label-title {
      font-size: 16px;
      line-height: 1.25;
      margin-bottom: 12px;
    }
    input {
      width: 100%;
      font-size: 16px;
      color: var(--primery-blue);
      line-height: 1.25;
      padding: 12px;
      background-color: var(--primery-white);
      border-radius: 6px;
      border: 1px solid var(--secondary-color-4);
    }
  }

  .MuiTextField-root {
    width: 100%;
    .MuiInputBase-root{
      padding: 0;
      input{
        border: 1px solid var(--secondary-color-4);
      }
      .MuiOutlinedInput-notchedOutline{
        border: none;
      }
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .water-amount-btn-box {
    display: flex;
    gap: 7px;
    align-items: center;

    .water-amount-btn {
      padding: 0;
      background-color: var(--primery-white);
      stroke: var(--primery-blue);
      fill: var(--primery-blue);
      line-height: 0;
      border-radius: 50%;
      padding: 10px;
      border: 1px solid var(--secondary-color-4);
      box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
    }
    .current-water {
      font-size: 18px;
      line-height: 1.3;
      background-color: var(--secondaru-color);
      color: var(--primery-blue);
      padding: 6px 10px;
      border-radius: 40px;
      width: 92px;
      text-align: center;
    }
  }
  .result {
    display: flex;
    justify-content: right;
    gap: 24px;
    font-size: 18px;
    line-height: 1.3;
    align-items: center;
    span {
      color: var(--primery-blue);
      font-weight: 700;
    }
    button {
      color: var(--primery-white);
      font-size: inherit;
      padding: 10px 30px;
      background-color: var(--primery-blue);
      border-radius: 10px;
    }
  }
  .previous-val-box {
    display: flex;
    gap: 12px;
    justify-content: left;
    align-items: center;
    padding: 8px 24px;
    background-color: var(--secondary-color-2);
    width: fit-content;
    margin-bottom: 24px;
    border-radius: 10px;
    svg {
      fill: var(--primery-blue);
    }
    .water-info {
      display: flex;
      gap: 16px;
      align-items: center;
      .amount {
        font-size: 18px;
        color: var(--primery-blue);
        line-height: 1.3;
      }
      .time {
        font-size: 12px;
        line-height: 2;
        width: 82px;
      }
    }
  }
  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    border: none;
  }
`;
