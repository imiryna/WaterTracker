import React from 'react';
import {
  AuthStyledForm,
  AuthDiv,
  FormName,
  InputDiv,
  StyledInput,
  FormButton,
} from './signIn.styled';
import { useFormik } from 'formik';
import { loginThunk } from '../../Redux/auth/authThunk';
import { useDispatch } from 'react-redux';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: values => {
      dispatch(loginThunk(values));
      formik.resetForm();
    },
  });

  return (
    <AuthDiv>
      <AuthStyledForm onSubmit={formik.handleSubmit}>
        <FormName>Sign in</FormName>
        <InputDiv>
          <label htmlFor="email">Enter your email</label>
          <StyledInput
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="E-mail"
          />
        </InputDiv>

        <InputDiv>
          <label htmlFor="email">Enter your password</label>
          <StyledInput
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
        </InputDiv>

        <FormButton type="submit">Sign In</FormButton>
      </AuthStyledForm>
    </AuthDiv>
  );
};

export default AuthForm;
