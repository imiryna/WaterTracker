import styled from 'styled-components';

export const StyledWaterList = styled.div`
  display: flex;
  flex-direction: column;
  height: 212px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color-4);
    border-radius: 20px;
  }
  .main-title {
    font-size: 24px;
    font-family: var(--primery-font);
    font-weight: 500;
    margin-bottom: 16px;
    @media only screen and (min-width: 768px) {
      font-size: 26px;
    }
  }
  .water-card {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--secondaru-color);
    margin-bottom: 12px;
    padding-bottom: 12px;
    .water-card-left-side {
      display: flex;
      gap: 12px;
      fill: var(--primery-blue);

      .water-info {
        display: flex;
        gap: 16px;
        align-items: center;
        .water-quantity {
          font-size: 18px;
          color: var(--primery-blue);
          line-height: 1.3;
        }
        .water-add-time {
          font-size: 12px;
          line-height: 2;
        }
      }
    }
    .btns {
      display: flex;
      gap: 18px;
      button {
        background-color: transparent;
        &.edit-btn {
          stroke: var(--secondary-color-4);
          position: relative;
          &:before {
            content: '';
            display: block;
            width: 16px;
            opacity: 0;
            position: absolute;
            height: 1px;
            border-radius: 1px;
            bottom: 25%;
            left: 0;
            transition: opacity 100ms linear;
          }
          &:hover {
            &:before {
              opacity: 1;
              background-color: var(--secondary-color-4);
            }
          }
        }
        &.delete-btn {
          stroke: var(--secondary-color-3);
          position: relative;
          &:before {
            content: '';
            display: block;
            width: 16px;
            opacity: 0;
            position: absolute;
            height: 1px;
            border-radius: 1px;
            bottom: 25%;
            left: 0;
            transition: opacity 100ms linear;
          }
          &:hover {
            &:before {
              opacity: 1;
              background-color: var(--secondary-color-3);
            }
          }
        }
      }
    }
  }
  .add-btn {
    display: flex;
    font-size: 18px;
    line-height: 1.3;
    align-items: center;
    color: var(--primery-blue);
    font-weight: 500;
    width: fit-content;
    gap: 8px;
    background: none;
    &:hover{
      color: var(--secondary-color-5);
    }

    &:hover{
      color: var(--secondary-color-5);
    }

    &:hover{
      color: var(--secondary-color-5);
    }
  }
`;
