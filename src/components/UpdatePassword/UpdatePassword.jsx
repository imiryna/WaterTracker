import React, {useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStyledForm, AuthDiv, FormName, InputDiv, StyledInput, FormButton, AuthDataError, RedirectButton } from '../SignIn/SignIn.styled';
import { selectAuthError, selectAuthAuthenticated } from 'Store/auth/authSelector';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { updatePasswordThunk } from 'Store/auth/authOperations';


 const validationSchema = Yup.object({
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

 export const UpdatePasswordForm = () => {

 const dispatch = useDispatch();
 const authError = useSelector(selectAuthError);
 const isAuthenticated = useSelector(selectAuthAuthenticated);

 const [openSnackbar, setOpenSnackbar] = useState(false);

   const formik = useFormik({
     initialValues: {
        password: '', 
        repeatPassword: ''
      },

      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
            await dispatch(updatePasswordThunk(values));
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
    return <Navigate to="/signin" />;
  }

   return (
    <AuthDiv>

     <AuthStyledForm onSubmit={formik.handleSubmit}>
        <FormName>Reset password</FormName>
       <InputDiv>
            <label htmlFor="password">Enter your new password</label>
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

       <FormButton type="submit">Reset password</FormButton>
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

export default UpdatePasswordForm; 