import { createGlobalStyle } from 'styled-components';


export const GlobalConfirmDialogStyles = createGlobalStyle`
  body {
    overflow: ${({ overlayVisible }) => (overlayVisible ? 'hidden' : 'auto')};
  }

  .custom-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;
    display: ${props => (props.overlayVisible ? 'block' : 'none')}; 
  }

  .custom-confirm-dialog {
    z-index: 50;  
    width: 280px;
    height: 260px;
    border-radius: 10px;
    background: #FFF;
    display: inline-flex;
    padding: 32px 24px;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    color: #333;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    overflow: hidden;

    @media (min-width: 768px) {
      width: 592px;
      height: 208px;
    }

    @media (min-width: 1440px) {
      width: 592px;
      height: 208px;
    }
    

  }

  .custom-confirm-dialog .p-confirm-dialog-message {
    font-size: 18px;
  }

  .p-icon.p-dialog-header-close-icon {
    stroke: #407BFF;
    width: 15px;
    height: 15px;
    
  }
  .p-dialog-footer {
    display: flex;
    
    @media (max-width: 767px) {
      flex-direction: column-reverse;
      gap: 24px;
    }

    @media (min-width: 768px) {
      justify-content: flex-end;
    }

    @media (min-width: 1440px) {
      justify-content: flex-start;
    }
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
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 10px;
    width: 232px;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      width: 160px;
      
    }

    @media (min-width: 1440px) {
      width: 160px;
      
    }
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
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 10px;
    width: 232px;
    flex-direction: column-reverse;


    @media (min-width: 768px) {
      width: 160px;
      
      
    }

    @media (min-width: 1440px) {
      width: 160px;
      
    }
  }
`;
