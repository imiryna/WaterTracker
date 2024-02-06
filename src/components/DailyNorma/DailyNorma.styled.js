const { default: styled } = require('styled-components');

export const StyledDalyNorma = styled.div`
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--secondary-color-2);
  width: fit-content;
  background-color: var(--primery-white);
  margin-bottom: 232px;

  @media (min-width: 768px){
    margin-bottom: 326px;
  }

  @media (min-width: 1440px){
    margin-bottom: 466px;
  }

  .title {
    font-size: 18px;
    line-height: 1.3;
  }
  .norma-edit-box {
    display: flex;
    gap: 12px;
    .norma-amount {
      font-size: 24px;
      font-weight: 700;
      color: var(--primery-blue);
      @media only screen and (max-width: 767px) {
        font-size: 22px;
      }
    }
    .edit-btn {
      font-size: 16px;
      color: var(--secondary-color-4);
      background: none;
      cursor: pointer;

      &:hover{
      color: var(--secondary-color-5)
      }
    }
    
  }
`;
