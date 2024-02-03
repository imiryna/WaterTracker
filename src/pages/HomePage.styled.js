import {styled} from "styled-components"

// import BottleImg from 'Images/Backgrounds/home-screen.png';
import BottleImgDesktop from 'Images/Backgrounds/bottle-home-screen.png'
import BubblesImgDesktop from 'Images/Backgrounds/background-bubbles-main-page.png'

export const StyledHomePageWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0 auto;
padding: 80px 20px 40px 20px;
max-width: 1440px;
background: url(${BottleImgDesktop}), url(${BubblesImgDesktop});
background-size: contain;
background-position: center;
background-repeat: no-repeat;
background-color: var(--primery-white);

@media (min-width: 768px){

}

@media (min-width: 1440px){
    flex-direction: row;
}  
`

export const StyledLeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0 auto;

@media (min-width: 768px){
    padding-left: 112px;
    padding-top: 52px;
    padding-bottom: 56px;
}



`


export const StyledRightContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
margin: 0 auto;
padding: 24px 8px;
max-width: 767px;
background-color: var(--secondary-color-2);
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

@media (min-width: 768px){
    max-width: 656px;
    padding: 32px 24px;
    margin: 0 auto;
}

@media (min-width: 1440px){
    max-width: 544px;
}


`




