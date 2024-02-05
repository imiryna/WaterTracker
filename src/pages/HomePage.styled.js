import { styled } from 'styled-components';

// import BottleImg from 'Images/Backgrounds/home-screen.png';
import BottleImgDesktop from 'Images/Backgrounds/background-main-page.png';
import BottleImgMob from 'Images/Backgrounds/background-main-page-mobile.png';
import BottleImgTab from 'Images/Backgrounds/background-main-page-tablet.png';
import BubblesImgDesktop from 'Images/Backgrounds/background-bubbles-main-page.png';
import BubblesImgMob from 'Images/Backgrounds/background-bubbles-home-screen-mobile.png';
import BubblesImgTab from 'Images/Backgrounds/background-bubbles-main-page-tablet.png';
import BackButtlMob from 'Images/Backgrounds/bottle-home-screen-mobile.png';
import BackButtlTab from 'Images/Backgrounds/bottle-home-screen-tablet.png';
import BackButtlScreen from 'Images/Backgrounds/bottle-home-screen.png';

export const WelcomeWrapCss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  margin-bottom: 37px;
  margin-left: 0;
  margin-right: 0;

  @media (min-width: 768px) {
    justify-content: start;
    gap: 60px;
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 200px;
    justify-content: space-around;
    flex-direction: row;
    gap: 90px;
    margin-left: 140px;
    margin-right: auto;
  }
`;

export const SectionCss = styled.div`
  padding: 72px 20px 40px;
  background-color: var(--primery-White);
  background-image: url(${BottleImgMob}), url(${BubblesImgMob});
  background-size: contain;
  background-position: right bottom, left top;
  background-repeat: no-repeat;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    padding: 104px 32px 50px;
    background-image: url(${BottleImgTab}), url(${BubblesImgTab});
  }

  @media (min-width: 1440px) {
    padding: 109px 18px 40px;
    background-image: url(${BottleImgDesktop}), url(${BubblesImgDesktop});
  }
`;

/** Home page style  */
export const StyledHomePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 20px 40px;
  background-image: url(${BubblesImgMob});
  background-size: contain;
  background-position: top bottom;
  background-repeat: no-repeat;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    background-image: url(${BubblesImgTab});
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 80px;
    background-image: url(${BubblesImgDesktop});
  }
`;

export const ButtleImgCss = styled.div`
  width: 280px;
  height: 208px;
  background-image: url(${BackButtlMob});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 518px;
    height: 386px;
    background-image: url(${BackButtlTab});
  }

  @media (min-width: 1440px) {
    width: 618px;
    height: 548px;
    background-image: url(${BackButtlScreen});
  }
`;

export const Wraper = styled.div`
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    margin-bottom: 0;
    margin-top: 44px;
  }
`;
export const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  padding: 24px 8px;
  max-width: 767px;
  background-color: var(--secondary-color-2);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media (min-width: 768px) {
    max-width: 656px;
    padding: 32px 24px;
  }

  @media (min-width: 1440px) {
    max-width: 544px;
  }
`;
