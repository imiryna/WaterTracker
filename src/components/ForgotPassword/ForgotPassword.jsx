import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStyledForm, AuthDiv, FormName, InputDiv, StyledInput, FormButton, AuthDataError, RedirectButton } from '../SignIn/SignIn.styled';
import { selectAuthError, selectAuthAuthenticated } from 'Store/auth/authSelector';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { forgotPasswordThunk } from 'Store/auth/authOperations';


 const validationSchema = Yup.object({
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});

 export const ForgotPasswordForm = () => {

 const dispatch = useDispatch();
 const authError = useSelector(selectAuthError);
 const isAuthenticated = useSelector(selectAuthAuthenticated);

 const [openSnackbar, setOpenSnackbar] = useState(false);

   const formik = useFormik({
     initialValues: {
       email: ''
      },

      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          await dispatch(forgotPasswordThunk(values));
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
        <FormName>Forgot password</FormName>
        <InputDiv>
            <label htmlFor="email">Enter your email and we'll send a link to reset your password</label>
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


       <FormButton type="submit">Send</FormButton>
       <RedirectButton to="/signin">Sign In</RedirectButton>
     </AuthStyledForm>
     <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="error">
            {authError}
          </Alert>
        </Snackbar>
     </AuthDiv>
   );
 };

export default ForgotPasswordForm;