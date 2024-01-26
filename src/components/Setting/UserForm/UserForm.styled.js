import styled from 'styled-components';
import { Field, Form } from 'formik';

export const RadioGrup = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;
export const RadioLabel = styled.label`
  margin-right: 15px;
`;

export const Radio = styled(Field)`
  display: inline;
  /* padding: 8px; */
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 5px;
  /* border: 1px solid #ccc; */
  /* border-radius: 4px; */
  /* width: 100%; */
`;
export const Input = styled(Field)`
  display: block;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;
export const FormStyled = styled(Form)`
  width: 700px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;
export const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
export const Wrapper = styled.div`
  display: inline-block;
  width: 50%;
  /* margin-right: 20px; */
`;
export const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
`;
export const Button = styled.button`
  display: block;
  margin-left: auto;
  width: 100px;
  margin-top: 10px;
  padding: 5px 20px 5px 20px;
  border: 0px solid black;
  border-radius: 5px;
  background-color: #438dee;
  color: #fff;
  font-size: 12px;
`;
