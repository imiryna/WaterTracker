import styled from 'styled-components';
import BottleImgDes from 'Images/Backgrounds/bottle-sign-in.png';
import BubblesDes from 'Images/Backgrounds/background-bubbles-main-page.png';

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
display: flex;
flex-direction: column;
gap: 8px

color: #2F2F2F;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
`;
export const StyledInput = styled.input`
width: 384px;
padding: 12px 10px;
border-radius: 6px;
border: 1px solid #D7E3FF;
background: #FFF);
transition: border-color 0.3s;

&::placeholder {
color: #9EBBFF;
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
}

&.error::placeholder {
  color: #EF5050;
}

&.error {
  border: 1px solid #EF5050;
  color: #EF5050;
}

&:focus {
  outline: none:
  border-color: #D7E3FF;
  border-width: 1px; 
  border-style: solid; 
  color: #407BFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
}

&:active {
  outline: none;
  border-color: #D7E3FF;
  border-width: 1px; 
  border-style: solid; 
  color: #407BFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; 
}

&:not(:focus):not(:active) {
  
}
`

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
