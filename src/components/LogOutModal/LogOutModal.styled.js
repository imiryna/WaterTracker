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
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;
    display: ${({ overlayVisible }) => (overlayVisible ? 'block' : 'none')};
  }

  .custom-confirm-dialog {
    width: 592px;
    height: 208px;
    border-radius: 10px;
    background: #FFF;
    display: inline-flex;
    padding: 32px 24px;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    color: #333;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    overflow: hidden;

  }

  .p-confirm-dialog-header {
   font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;

  }

  .p-confirm-dialog-header-icon {
    background: #407BFF;
    width:24px;

  }

  .p-confirm-dialog-accept {
    /* Styles for Log out button */
    background-color: #EF5050;
    color: white;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: center;
    padding-top:10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left:30px;
    border-radius: 10px;
  }

  .p-confirm-dialog-reject {
    /* Styles for Cancel button */
    background-color: #D7E3FF;
    color: #407BFF;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: center;
    margin-right: 24px;
    padding-top:10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left:30px;
    border-radius: 10px;
    
  }
`;


 



