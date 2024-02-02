import styled from 'styled-components';
import BottleImgDes from 'Images/Backgrounds/bottle-sign-in.png';
import BubblesDes from 'Images/Backgrounds/background-bubbles-main-page.png';
import {ReactComponent as ShowPass} from "Images/Icons/show-pass.svg";
import {ReactComponent as HidePass} from "Images/Icons/hide-pass.svg";
import { NavLink } from 'react-router-dom';


export const AuthPageDiv = styled.div`
  background-color: #fff;
  background-image: url(${BottleImgDes}), url(${BubblesDes});
  background-repeat: no-repeat;
`;

export const AuthDiv = styled.div`
  padding-top: 49px;
  padding-bottom: 109px;
  padding-left: 18px;
  padding-right: 18px;
  width: 1440px;
`;
export const AuthStyledForm = styled.form`
  padding-top: 113px;
  padding-bottom: 157px;
  padding-left: 822px;
  padding-right: 198px;
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
  position: relative;
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
  position: relative;
  width: 384px;
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
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  
`;

export const ShowPassIcon = styled(ShowPass)`
  width: 16px;
  height: 16px;
  fill: #407BFF;
`;

export const HidePassIcon = styled(HidePass)`
  width: 16px;
  height: 16px;
  fill: #407BFF;
`;


export const FormButton = styled.button`
  padding: 10px 30px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  width: 384px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
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
`