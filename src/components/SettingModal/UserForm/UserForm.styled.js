import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ReactComponent as ShowPass } from 'Images/Icons/show-pass.svg';
import { ReactComponent as HidePass } from 'Images/Icons/hide-pass.svg';

export const Title = styled.div`
  /* margin-bottom: 15px; */
  color: var(--primery-black);
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
  color: var(--primery-black);
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
  color: var(--primery-black);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25em; /* 125% */
`;
export const RadioGroup = styled.div`
  margin-bottom: auto;
`;
export const Radio = styled(Field)`
  display: inline;
  margin-top: 15px;
  margin-bottom: 53px;
  margin-right: 5px;

  fill: var(--primery-white, #fff);
  stroke-width: 1px;
  stroke: var(--primery-blue);
`;
export const Input = styled(Field)`
  color: var(--primery-blue);
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
  border: 1px solid var(--secondary-color-4);
  width: 100%;

  &_error {
    color: var(--secondary-color-3);
    border: 1px solid var(--secondary-color-3);
  }

  &::-webkit-autofill {
    color: var(--secondary-color-4);
  }

  &::-webkit-input-placeholder {
    color: var(--secondary-color-4);
  }
  &::-moz-placeholder {
    color: var(--secondary-color-4);
  } /* Firefox 19+ */
  &:-moz-placeholder {
    color: var(--secondary-color-4);
  } /* Firefox 18- */
  &:-ms-input-placeholder {
    color: var(--secondary-color-4);
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) {
    max-width: 850px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  border-radius: 10px;
  background: var(--primery-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  padding: 10px 50px;
  display: block;
  margin-left: auto;

  color: var(--primery-white, #fff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
`;

export const InputContainer = styled.div`
  position: relative;
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
  stroke: var(--primery-blue);
`;

export const HidePassIcon = styled(HidePass)`
  width: 16px;
  height: 16px;
  stroke: var(--primery-blue);
`;
