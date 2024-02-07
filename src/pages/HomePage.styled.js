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
  margin-top: 24px;
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
  padding: 72px 20px 64px;
  background-color: var(--primery-White);
  background-image: url(${BottleImgMob}), url(${BubblesImgMob});
  background-size: contain;
  /* background-position: right bottom, left top; */
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    padding: 104px 32px 50px 32px;
    background-image: url(${BottleImgTab}), url(${BubblesImgTab});
  }

  @media (min-width: 1440px) {
    padding: 109px 18px 74px;
    background-image: url(${BottleImgDesktop}), url(${BubblesImgDesktop});
  }
`;

// /** Home page style  */
export const StyledHomePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 20px 40px;
  background-image: url(${BubblesImgMob});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    background-image: url(${BubblesImgTab});
    background-position: center;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    background-image: url(${BubblesImgDesktop});
    background-position: center;
    padding-right: 112px;
    padding-left: 112px;

  }
`
export const StyledLeftContainer = styled.div`
  background-image: url(${BackButtlMob});
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 30%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;

  @media (min-width: 768px){
    background-image: url(${BackButtlTab});

    margin: 0 auto;
    margin-bottom: 40px;

  }

  @media (min-width: 1440px) {
    background-image: url(${BackButtlScreen});
    margin: 0;
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
    margin: 0 auto;
    max-width: 656px;
    padding: 32px 24px;
  }

  @media (min-width: 1440px) {
    max-width: 592px;
  }
`;



