import styled from 'styled-components';
import BottleImg from '../Images/Backgrounds/bottle-home-screen-mobile.png';
import BottleImgTab from '../Images/Backgrounds/background-bubbles-main-page-tablet.png';
import BottleImgDes from '../Images/Backgrounds/background-main-page.png';

export const SectionCss = styled.div`
  padding: 8px 20px 40px;
  background-color: var(--primery-White);
  background-image: url(${BottleImg});

  @media (min-width: 768px) {
    padding: 16px 32px 50px;
    background-image: url(${BottleImgTab});
  }

  @media (min-width: 1440px) {
    padding: 12px 18px 40px;
    background-image: url(${BottleImgDes});
  }
`;

export const AdvicerCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NavCss = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 94px;
  /* margin-left: 94; */
  /* margin-right: 94; */

  @media (min-width: 768px) {
    gap: 512px;
  }

  @media (min-width: 1440px) {
    gap: 1024px;
  }
`;
export const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoText = styled.div`
  color: var(--primery-blue);
  font-family: var(--primery-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 58px;
  height: 28px;
`;
