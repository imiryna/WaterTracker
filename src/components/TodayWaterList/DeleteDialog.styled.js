import { Dialog } from 'primereact/dialog';
import styled from 'styled-components';

export const StyledDeleteDialog = styled(Dialog)`
  background-color: var(--primery-white);
  padding: 32px 24px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 24px;
  z-index: 10;
  width: 592px;
  .p-dialog-header-close-icon{
      stroke: transparent;
      color: var(--primery-blue);
  }
  .text {
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 18px;
  }

  .btn-box {
    display: flex;
    justify-content: right;
    gap: 24px;
    width: 100%;
    button {
      padding: 10px 30px;
      border-radius: 10px;
      font-size: 18px;
      &.delete-btn {
        box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
        background-color: var(--secondary-color-3);
        color: var(--primery-white);
      }
      &.cancel-btn {
        background-color: var(--secondary-color-4);
        color: var(--primery-blue);
      }
    }
  }
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  background-color: var(--primery-black);
  z-index: 1;
  opacity: 0.5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
