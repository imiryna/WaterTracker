import React, {useState, useEffect} from 'react';
import { Navigate} from 'react-router-dom';
import { AuthStyledForm, AuthDiv, FormName, InputDiv, StyledInput, FormButton, AuthDataError, RedirectButton } from '../SignIn/SignIn.styled';
import { selectAuthError, selectAuthAuthenticated, selectAuthIsLoading } from 'Store/auth/authSelector';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { forgotPasswordThunk } from 'Store/auth/authOperations';
import { Loading } from 'components/Loader/Loader.styled';

 const validationSchema = Yup.object({
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});

 export const ForgotPasswordForm = () => {
  const isLoading = useSelector(selectAuthIsLoading);
 const dispatch = useDispatch();
 const authError = useSelector(selectAuthError);
 const isAuthenticated = useSelector(selectAuthAuthenticated);

 const [openSnackbar, setOpenSnackbar] = useState(false);
 const [openConfirmation, setOpenOpenConfirmation] = useState(false);


   const formik = useFormik({
     initialValues: {
       email: ''
      },
      
      validationSchema: validationSchema,

      onSubmit: async (values) => {
        try {
          await dispatch(forgotPasswordThunk({email: values.email}));
          setOpenOpenConfirmation(true);
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

  const handleCloseConfirmation = () => {
    setOpenOpenConfirmation(false);
  }

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

   return isLoading ? 
   <Loading/>
   :
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
     <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar } anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Alert onClose={handleCloseSnackbar} severity="error">
            Please, enter your email
          </Alert>
        </Snackbar>
        <Snackbar
        open={openConfirmation}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleCloseConfirmation}
        message="Check Your email!"
        >

        </Snackbar>
     </AuthDiv>
   ;
 };

export default ForgotPasswordForm;