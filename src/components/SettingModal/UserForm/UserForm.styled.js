import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ReactComponent as ShowPass } from 'Images/Icons/show-pass.svg';
import { ReactComponent as HidePass } from 'Images/Icons/hide-pass.svg';

export const Title = styled.div`
  /* margin-bottom: 15px; */
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1em; /* 111.111% */
`;

export const FormStyled = styled(Form)`
  /* display: flex; */
  width: 100%;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;

export const Label = styled.label`
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1em; //111.111%
  &.small {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
  }
`;
export const RadioLabel = styled.label`
  margin-right: 15px;
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25em; /* 125% */
`;

export const Radio = styled(Field)`
  display: inline;
  margin-top: 15px;
  margin-bottom: 53px;
  margin-right: 5px;

  fill: var(--Primery-Color-White, #fff);
  stroke-width: 1px;
  stroke: var(--Primery-Color-Blue, #407bff);
`;
export const Input = styled(Field)`
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25em; /* 125% */

  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 6px;
  border: 1px solid var(--Secondary-color-4, #d7e3ff);
  width: 100%;

  &::-webkit-autofill {
    color: var(--Secondary-color-3, #9ebbff);
  }

  &::-webkit-input-placeholder {
    color: var(--Secondary-color-3, #9ebbff);
  }
  &::-moz-placeholder {
    color: var(--Secondary-color-3, #9ebbff);
  } /* Firefox 19+ */
  &:-moz-placeholder {
    color: var(--Secondary-color-3, #9ebbff);
  } /* Firefox 18- */
  &:-ms-input-placeholder {
    color: var(--Secondary-color-3, #9ebbff);
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const Wrapper = styled.div`
  display: inline-block;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  /* margin-right: 20px; */
`;

export const Button = styled.button`
  margin-top: 24px;
  border-radius: 10px;
  background: var(--primery-blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  padding: 10px 50px;
  display: block;
  margin-left: auto;

  color: var(--primery-white, #fff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const InputContainer = styled.div`
  position: relative;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1440px) {
    width: 384px;
  }
`;
export const ButtonIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
`;
export const ShowPassIcon = styled(ShowPass)`
  width: 16px;
  height: 16px;
  stroke: #407bff;
`;

export const HidePassIcon = styled(HidePass)`
  width: 16px;
  height: 16px;
  stroke: #407bff;
`;
