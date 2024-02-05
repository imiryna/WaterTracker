import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import { uploadUserAvatarThunk } from 'Store/currentUser/currentUserThunk';
// Styles
import {
  FormStyled,
  Input,
  Label,
  ErrorText,
  InputContainer,
  StyledImg,
  StyledUploadButton,
  StyledUploadIcon,
  StyledAvatarSection,
} from './AvatarForm.styled';

export const AvatarForm = () => {
  const dispatch = useDispatch();
  // Avatarka
  const { avatarUrl = 'WaterTracker/avatar-neutral.jpg', name = 'Avatar' } =
    useSelector(selectUserData);
  console.log('Avatar: ', avatarUrl);

  //Submit function

  function handleSubmit(values) {
    const myData = new FormData();
    myData.append('avatar', values);
    // todo
    console.log('Form was Submit: ', values, myData);
    dispatch(uploadUserAvatarThunk(myData));
    return;
  }

  const validationRules = Yup.object().shape({
    avatar: Yup.mixed()
      .required('required')
      .test('fileFormat', 'Only JPG or PNG files are allowed', value => {
        if (value) {
          const supportedFormats = ['jpg', 'jpeg', 'png'];
          return supportedFormats.includes(value.name.split('.').pop());
        }
        return true;
      })
      .test('fileSize', 'File size must not be more than 1MB', value => {
        if (value) {
          return value.size <= 1 * 1024 * 1024;
        }
        return true;
      }),
  });

  const formik = useFormik({
    initialValues: {
      avatar: '',
    },
    // onSubmit: handleSubmit,
    validationSchema: validationRules,
  });

  const handleChange = e => {
    console.log('Input chenged');
    formik.setFieldValue('avatar', e.target.files[0]);
    handleSubmit(e.target.files[0]);
  };

  return (
    <FormStyled>
      <Label htmlFor="avatar">Your photo</Label>
      <InputContainer>
        <StyledAvatarSection>
          <StyledImg src={avatarUrl} alt={name} />
          <StyledUploadButton>
            <StyledUploadIcon />
            <p>Upload a photo</p>
            <Input type="file" name="avatar" onChange={handleChange} />
          </StyledUploadButton>
        </StyledAvatarSection>
      </InputContainer>

      <ErrorText>
        {formik.errors.avatar ? (
          <p style={{ color: 'red' }}>{formik.errors.avatar}</p>
        ) : null}
      </ErrorText>
    </FormStyled>
  );
};
