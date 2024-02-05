import styled from 'styled-components';

export const ContainerCss = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 10px;
  background: var(--secondary-color-2);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  margin-right: 0;
  margin-top: 0;

  @media (min-width: 768px) {
    padding: 30px;
    margin-right: 210px;
  }

  @media (min-width: 1440px) {
    margin-top: 30px;
    padding: 24px;
  }
`;

export const WrapContentCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TableCss = styled.p`
  color: var(--primery-black);
  font-family: var(--primery-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 12px;
`;
export const TextCss = styled.p`
  color: var(--primery-black);
  font-family: var(--primery-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;
