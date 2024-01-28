import React from 'react';
import { AuthStyledForm, AuthDiv, FormName, InputDiv, StyledInput, FormButton } from '../SignIn/signIn.styled';
 import { useFormik } from 'formik';
 import { registerThunk } from '../../Redux/auth/authOperations';
 import { useDispatch } from 'react-redux';

 
 export const AuthRegForm = () => {

 const dispatch = useDispatch();
   const formik = useFormik({
     initialValues: {
       email: '',
       password: '', 
      },
      
      onSubmit: values => {
        dispatch(registerThunk(values));
        formik.resetForm();
     }
   });

  


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
        </InputDiv>
       
       <InputDiv>
            <label htmlFor="email">Enter your password</label>
             <StyledInput
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder='Password'
            />
    
       </InputDiv>

       <InputDiv>
            <label htmlFor="email">Repeat your password</label>
             <StyledInput
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder='Repeat password'
            />
    
       </InputDiv>
       
       <FormButton type="submit">Sign Up</FormButton>

     </AuthStyledForm>
     </AuthDiv>
   );
 };

export default AuthRegForm;