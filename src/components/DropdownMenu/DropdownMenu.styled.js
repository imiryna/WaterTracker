import styled from 'styled-components';
import { ReactComponent as Outline } from 'Images/Icons/settings.svg';
import { ReactComponent as Arrow } from 'Images/Icons/logout.svg';

export const DropdownCss = styled.div`
  position: relative;
  padding: 16px;
`;

export const MenuCss = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 118px;
  display: flex;
  flex-direction: column;

  gap: 16px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: var(--primery-white, #fff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  list-style-type: none;
  margin: 5px 0;
  padding: 0;
`;

export const BoxCss = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  color: var(--primery-blue);
  font-family: var(--primery-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;

export const OutlineCss = styled(Outline)`
  width: 16px;
  height: 16px;
  stroke: var(--primery-blue);
`;

export const ArrowCss = styled(Arrow)`
  width: 16px;
  height: 16px;
  stroke: var(--primery-blue);
`;
