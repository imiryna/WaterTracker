import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {
  AuthStyledForm,
  AuthDiv,
  FormName,
  InputDiv,
  StyledInput,
  FormButton,
  AuthDataError,
  RedirectButton,
  NavDiv,
  ShowPassIcon,
  HidePassIcon,
  IconContainer, 
  ButtonIcon,

} from './SignIn.styled';
import {
  selectAuthError,
  selectAuthAuthenticated,
} from 'Store/auth/authSelector';
import { loginThunk } from 'Store/auth/authOperations';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(64, 'Password should be of maximum 64 characters length')
    .required('Password is required'),
});

export const AuthForm = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const isAuthenticated = useSelector(selectAuthAuthenticated);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        await dispatch(loginThunk(values));
        formik.resetForm();
      } catch (error) {
        setOpenSnackbar(true);
      }
    },
  });

  useEffect(() => {
    if (authError) {
      setOpenSnackbar(true);
    }
  }, [authError]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

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
            className={
              formik.errors.email && formik.touched.email ? 'error' : ''
            }
          />
          {formik.errors.email && formik.touched.email ? (
            <AuthDataError>{formik.errors.email}</AuthDataError>
          ) : null}
        </InputDiv>

        <InputDiv>
          <label htmlFor="password">Enter your password</label>
          <IconContainer>
             <StyledInput
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            className={formik.errors.password && formik.touched.password ? 'error' : ''}
          />
          
            <ButtonIcon
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ShowPassIcon /> : <HidePassIcon />}
            </ButtonIcon>
          </IconContainer>
          {formik.errors.password && formik.touched.password ? (
            <AuthDataError>{formik.errors.password}</AuthDataError>
          ) : null}
        </InputDiv>

        <FormButton type="submit">Sign In</FormButton>
        <NavDiv>
          <RedirectButton to="/signup">Sign Up</RedirectButton>
          <RedirectButton to="/forgotpassword">Forgot password?</RedirectButton>
          </NavDiv>
      </AuthStyledForm>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {authError}
        </Alert>
      </Snackbar>
    </AuthDiv>
  );
};

export default AuthForm;
