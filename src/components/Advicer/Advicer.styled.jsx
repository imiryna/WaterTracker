import styled from 'styled-components';
import BottleImg from 'Images/Backgrounds/bottle-home-screen-mobile.png';
import BottleImgTab from 'Images/Backgrounds/background-bubbles-main-page-tablet.png';
import BottleImgDes from 'Images/Backgrounds/background-main-page.png';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CalendarArrow } from 'Images/Icons/calendar.svg';
import { ReactComponent as ChatBarArrow } from 'Images/Icons/statistic.svg';
import { ReactComponent as PersonalSettingsArrow } from 'Images/Icons/personal-settings.svg';

export const PersonalSettingsArr = styled(PersonalSettingsArrow)`
  width: 32px;
  height: 32px;
`;

export const ChatBarArrowCss = styled(ChatBarArrow)`
  width: 32px;
  height: 32px;
`;

export const CalendarArrowCss = styled(CalendarArrow)`
  width: 32px;
  height: 32px;
`;
export const SectionCss = styled.div`
  padding: 72px 20px 40px;
  background-color: var(--primery-White);
  background-image: url(${BottleImg});
  background-size: cover;

  @media (min-width: 768px) {
    padding: 104px 32px 50px;
    background-image: url(${BottleImgTab});
  }

  @media (min-width: 1440px) {
    padding: 109px 18px 40px;
    background-image: url(${BottleImgDes});
  }
`;

/* advicer styled */
export const AdvicerCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
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
  width: 336px;
`;
export const BtnText = styled.p`
  color: var(--primery-white);
  text-align: center;
  font-family: var(--primery-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
`;
export const ContentTextCss = styled.div`
  color: var(--primery-black);
  font-family: var(--primery-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
`;
