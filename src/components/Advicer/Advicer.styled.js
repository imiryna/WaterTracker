import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CalendarArrow } from 'Images/Icons/calendar.svg';
import { ReactComponent as ChatBarArrow } from 'Images/Icons/statistic.svg';
import { ReactComponent as PersonalSettingsArrow } from 'Images/Icons/personal-settings.svg';

export const PersonalSettingsArr = styled(PersonalSettingsArrow)`
  width: 24px;
  height: 24px;
  @media (width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const ChatBarArrowCss = styled(ChatBarArrow)`
  width: 24px;
  height: 24px;
  @media (width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const CalendarArrowCss = styled(CalendarArrow)`
  width: 24px;
  height: 24px;
  @media (width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

/* advicer styled */
export const AdvicerCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;
`;
export const TableTextCss = styled.p`
  color: var(--primery-black);
  font-family: var(--primery-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  text-align: left;
`;
export const WrapCss = styled.div`
  width: 246px;
  @media (min-width: 768px) {
    width: 436px;
  }
`;
export const TitleCss = styled.h1`
  color: var(--primery-black);
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.14;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const TextCss = styled.div`
  color: var(--primery-black);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;
export const IconBoxCss = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
export const GridBoxcss = styled.div`
  display: grid;
  grid-template-columns: 216px;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 20px;
    grid-template-columns: 224px 224px 224px;
  }

  @media (min-width: 1440px) {
    gap: 27px;
    grid-template-columns: 248px;
  }
`;
export const NavLinkBtn = styled(NavLink)`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--primery-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  width: 280px;
  @media (min-width: 768px) {
    width: 336px;
  }
`;
export const BtnText = styled.p`
  color: var(--primery-white);
  text-align: center;
  font-family: var(--primery-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  width: 280px;
  @media (min-width: 768px) {
    width: 336px;
  }
`;
export const ContentTextCss = styled.div`
  color: var(--primery-black);
  font-family: var(--primery-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  white-space: nowrap;
`;
