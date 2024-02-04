import { styled } from 'styled-components';

// import BottleImg from 'Images/Backgrounds/home-screen.png';
import BottleImgDesktop from 'Images/Backgrounds/background-main-page.png';

import BottleImgMob from 'Images/Backgrounds/background-main-page-mobile.png';
import BottleImgTab from 'Images/Backgrounds/background-main-page-tablet.png';
import BubblesImgDesktop from 'Images/Backgrounds/background-bubbles-main-page.png';
import BubblesImgMob from 'Images/Backgrounds/background-bubbles-home-screen-mobile.png';

export const WelcomeWrapCss = styled.div`
  display: grid;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 37px;
  /* background-color: yellow; */

  @media (min-width: 768px) {
    gap: 60px;
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 439px 430px;
    gap: 80px;
    margin-bottom: 185px;
  }
`;

export const SectionCss = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  padding: 72px 20px 40px;
  background-color: var(--primery-White);
  background-image: url(${BottleImgMob});
  background-size: contain;
  background-position: right bottom, left top;
  background-repeat: no-repeat;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    padding: 104px 32px 104px;
    background-image: url(${BottleImgTab});
    gap: 60px;
  }

  @media (min-width: 1440px) {
    padding: 109px 18px 0px;
    align-items: center;
    justify-content: center;
    background-image: url(${BottleImgDesktop}), url(${BubblesImgDesktop});
  }
`;
export const StyledHomePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 72px 20px 40px;

  background-image: url(${BottleImgMob}), url(${BubblesImgMob});
  background-size: contain;
  background-position: right bottom, left top;
  background-repeat: no-repeat;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    background-image: url(${BottleImgTab});
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    background-image: url(${BottleImgDesktop}), url(${BubblesImgDesktop});
  }
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-left: 112px;
    padding-top: 52px;
    padding-bottom: 56px;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding: 24px 8px;
  max-width: 767px;
  background-color: var(--secondary-color-2);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media (min-width: 768px) {
    max-width: 656px;
    padding: 32px 24px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    max-width: 544px;
  }
`;
