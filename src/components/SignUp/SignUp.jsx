import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AuthStyledForm, AuthDiv, FormName, InputDiv, StyledInput, FormButton, AuthDataError } from '../SignIn/SignIn.styled';
import { selectAuthError, selectAuthAuthenticated } from '../../Redux/auth/authSelector';
import { useFormik } from 'formik';
import { registerThunk } from '../../Redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


 const validationSchema = Yup.object({
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(64, 'Password should be of maximum 64 characters length')
    .required('Password is required'),
    repeatPassword: Yup
    .string('Enter your password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password is required'),
});
 
 export const AuthRegForm = () => {

 const dispatch = useDispatch();
 const authError = useSelector(selectAuthError);
 const isAuthenticated = useSelector(selectAuthAuthenticated);

 const [openSnackbar, setOpenSnackbar] = useState(false);

   const formik = useFormik({
     initialValues: {
       email: '',
       password: '', 
       repeatPassword: ''
      },

      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          await dispatch(registerThunk(values));
          formik.resetForm();
        } catch (error) {
          setOpenSnackbar(true);
        }
      }
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
    return <Navigate to="/home" />;
  }

   return (
    <AuthDiv>
    
     <AuthStyledForm onSubmit={formik.handleSubmit}>
        <FormName>Sign Up</FormName>
        <InputDiv>
            <label htmlFor="email">Enter your email</label>
            <StyledInput
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder='E-mail'
            />
            {formik.errors.email && formik.touched.email ? <AuthDataError>{formik.errors.email}</AuthDataError> : null} 
        </InputDiv>
       
       <InputDiv>
            <label htmlFor="password">Enter your password</label>
             <StyledInput
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder='Password'
            />
            {formik.errors.password && formik.touched.password ? (
            <AuthDataError>{formik.errors.password}</AuthDataError>
          ) : null}
       </InputDiv>

       <InputDiv>
            <label htmlFor="repeatPassword">Repeat your password</label>
             <StyledInput
                id="repeatPassword"
                name="repeatPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
                placeholder='Repeat password'
            />
            {formik.errors.repeatPassword && formik.touched.repeatPassword ? (
    <AuthDataError>{formik.errors.repeatPassword}</AuthDataError>
  ) : null}
       </InputDiv> 
       
       <FormButton type="submit">Sign Up</FormButton>
       <NavLink to="/signin">Sign In</NavLink>
     </AuthStyledForm>
     <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="error">
            {authError}
          </Alert>
        </Snackbar>
     </AuthDiv>
   );
 };

export default AuthRegForm;