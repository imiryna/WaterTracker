import styled from 'styled-components';
import { ReactComponent as UploadIcon } from 'Images/Icons/upload.svg';

export const FormStyled = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  //todo
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1em; //111.111%
`;
export const StyledUploadIcon = styled(UploadIcon)`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  stroke: var(--primery-blue);
  stroke-width: 80px;
`;
export const StyledUploadButton = styled.div`
  position: relative;
  margin-left: 5px;
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-weight: 500;
  font-size: 15px;
  color: var(--primery-blue);
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  // position: relative;
`;

export const ButtonIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
`;

export const StyledAvatarSection = styled.div`
  display: flex;
`;
export const StyledImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
export const StyledImgLabel = styled.p`
  display: block;
  margin-top: 15px;
  margin-bottom: 10px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1em; //111.111%
`;

export const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
`;
