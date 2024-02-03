import styled from 'styled-components';
import BottleImgDes from 'Images/Backgrounds/bottle-sign-in.png';
import BottleImgTab from 'Images/Backgrounds/bottle-sign-in-tablet.png';
import BottleImgMob from 'Images/Backgrounds/bottle-sign-in-mobile.png'
import BubblesDes from 'Images/Backgrounds/background-bubbles-main-page.png';
import BubblesTab from 'Images/Backgrounds/background-bubbles-main-page-tablet.png';
import BubblesMob from 'Images/Backgrounds/background-bubbles-main-page-mobile.png'
import {ReactComponent as ShowPass} from "Images/Icons/show-pass.svg";
import {ReactComponent as HidePass} from "Images/Icons/hide-pass.svg";
import { NavLink } from 'react-router-dom';


export const AuthPageDiv = styled.div`
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center bottom;
  height:680px;
  background-image: url(${BottleImgMob}), url(${BubblesMob});

  @media (min-width: 768px) {
    background-image: url(${BottleImgTab}), url(${BubblesTab});
    background-position: right bottom;
    width: 768px;
  }

  @media (min-width: 1440px) {
    background-image: url(${BottleImgDes}), url(${BubblesDes});
    background-position: left bottom;
    width: 1440px;
  }
`;

export const AuthDiv = styled.div`
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;


  @media (min-width: 768px) {
    padding-top: 104px;
    padding-left: 32px;
    padding-right: 400px;
    width: 768px;
  }

  @media (min-width: 1440px) {
    padding-top: 222px;
    padding-right: 18px;
    padding-left: 840px;
    width: 1440px;
  }

`;
export const AuthStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
`;

export const FormName = styled.h2`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #2F2F2F;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledInput = styled.input`
  width: 280px;
  padding: 12px 30px 12px 10px; 
  border-radius: 6px;
  border: 1px solid #D7E3FF;
  background: #FFF;
  transition: border-color 0.3s;
  color: #407BFF;

  &:focus {
    outline: none;
    border-color: #D7E3FF;
  }

  &::placeholder {
    color: #9EBBFF;
  }

  &.error {
    border: 1px solid #EF5050;
    color: #EF5050;
  }

  

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1440px) {
    width: 384px;
  }
`;

export const IconContainer = styled.div`
position: relative;
width: 280px;

@media (min-width: 768px) {
  width: 336px;
}

@media (min-width: 1440px) {
  width: 384px;
}
`;

export const ShowPassIcon = styled(ShowPass)`
  width: 16px;
  height: 16px;
  stroke: #407BFF;
`;

export const HidePassIcon = styled(HidePass)`
  width: 16px;
  height: 16px;
  stroke: #407BFF;
`;


export const FormButton = styled.button`
  padding: 10px 30px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  width: 280px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;



  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    width: 336px;
  }

  @media (min-width: 1440px) {
    width: 384px;
  }
`;

export const AuthDataError = styled.div`
color: #EF5050;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
margin-top: 4px;
`

export const RedirectButton = styled(NavLink)`
color: #407BFF;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
`
export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;


  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1440px) {
    width: 384px;
  }
`

export const ButtonIcon = styled.button`
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
background: transparent;
`


