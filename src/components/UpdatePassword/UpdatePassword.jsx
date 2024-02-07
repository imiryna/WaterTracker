import React, { useState } from 'react';
import { Navigate, redirect } from 'react-router-dom';
import {
  AuthStyledForm,
  AuthDiv,
  FormName,
  InputDiv,
  StyledInput,
  FormButton,
  AuthDataError,
  IconContainer,
  RedirectButton,
  ButtonIcon,
  ShowPassIcon,
  HidePassIcon,
} from '../SignIn/SignIn.styled';
import {
  selectAuthAuthenticated,
  selectAuthIsLoading,
} from 'Store/auth/authSelector';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { updatePasswordThunk } from 'Store/auth/authOperations';
import { Loading } from 'components/Loader/Loader.styled';

const validationSchema = Yup.object({
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(64, 'Password should be of maximum 64 characters length')
    .required('Password is required'),
  repeatPassword: Yup.string('Enter your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});

 export const UpdatePasswordForm = () => {

 const dispatch = useDispatch();
 const isAuthenticated = useSelector(selectAuthAuthenticated);
 const isLoading = useSelector(selectAuthIsLoading);
 const [openSnackbar, setOpenSnackbar] = useState(false);
 const [openConfirmation, setOpenOpenConfirmation] = useState(false);


  const formik = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
    },

    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        await dispatch(
          updatePasswordThunk({
            restoreToken,
            password: { password: values.password }
            
          })
        );
        openConfirmation()
        formik.resetForm();
        redirect('/signin');
      } catch (error) {
        setOpenSnackbar(true);
      }
    },
  });

  //  get token
  const url = window.location.href;
  const urlObject = new URL(url);
  const pathname = urlObject.search;
  const segment = pathname.split('=');
  const restoreToken = segment[1];

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleCloseConfirmation = () => {
    setOpenOpenConfirmation(false);
  }

  if (isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return isLoading 
    ? <Loading/> 
    :
    <AuthDiv>
      <AuthStyledForm onSubmit={formik.handleSubmit}>
        <FormName>Reset password</FormName>
        <InputDiv>
          <label htmlFor="password">Enter your new password</label>
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

        <InputDiv>
          <label htmlFor="repeatPassword">Repeat your password</label>
          <IconContainer>
             <StyledInput
            id="repeatPassword"
            name="repeatPassword"
            type={showRepeatPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            placeholder="Repeat password"
            className={formik.errors.password && formik.touched.password ? 'error' : ''}
          />
          
          <ButtonIcon
              type="button" 
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            >
              {showRepeatPassword ? <ShowPassIcon /> : <HidePassIcon />}
            </ButtonIcon>

          </IconContainer>
          {formik.errors.repeatPassword && formik.touched.repeatPassword ? (
            <AuthDataError>{formik.errors.repeatPassword}</AuthDataError>
          ) : null}
        </InputDiv>

        <FormButton type="submit">Reset password</FormButton>
        <RedirectButton to="/signin">Sign In</RedirectButton>
      </AuthStyledForm>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Fill the fields to reset your password
        </Alert>
      </Snackbar>
      <Snackbar
        open={openConfirmation}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleCloseConfirmation}
        message="Password updated!"
        >

        </Snackbar>
    </AuthDiv>
  ;
};

export default UpdatePasswordForm;
