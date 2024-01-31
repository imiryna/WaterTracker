import { createGlobalStyle } from 'styled-components';

export const GlobalConfirmDialogStyles = createGlobalStyle`
   body {
    overflow: ${({ overlayVisible }) => (overlayVisible ? 'hidden' : 'auto')};
   }

  .custom-confirm-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value for the desired transparency */
    z-index:40;
    display: ${({ overlayVisible }) => (overlayVisible ? 'block' : 'none')};
  }
  .custom-confirm-dialog {
    width: 592px;
    border-radius: 10px;
    background: #FFF;
    display: inline-flex;
    padding: 32px 24px;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }

  .custom-confirm-dialog .p-confirm-dialog-content {
   
    color: #333;
    
  }

 
`;
