import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthStyledForm, AuthDiv, FormName, InputDiv, StyledInput, FormButton, AuthDataError } from './SignIn.styled';
import { useFormik } from 'formik';
import { loginThunk } from '../../Redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),

});



 export const AuthForm = () => {

 const dispatch = useDispatch();
   const formik = useFormik({
     initialValues: {
       email: '',
       password: '', 
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        dispatch(loginThunk(values));
        formik.resetForm();
     }
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
            className={
              formik.errors.email && formik.touched.email
                ? 'error'
                : ''
            }
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
                className={
                  formik.errors.password && formik.touched.password
                    ? 'error'
                    : ''
                }
            />

            {formik.errors.password && formik.touched.password ? (
            <AuthDataError>{formik.errors.password}</AuthDataError>
          ) : null}
    
       </InputDiv>
       
       <FormButton type="submit">Sign In</FormButton>
        <NavLink to="/signup">Sign Up</NavLink>
     </AuthStyledForm>

    
     </AuthDiv>
   );
 };

export default AuthForm;
