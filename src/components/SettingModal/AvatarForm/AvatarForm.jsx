import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { object, mixed } from 'yup';

import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import {
  uploadUserAvatarThunk,
  // getCurrentUserThunk,
} from 'Store/currentUser/currentUserThunk';

// Styles
import {
  FormStyled,
  Input,
  Label,
  Button,
  InputContainer,
  StyledImg,
  StyledImgLabel,
  StyledUploadButton,
  StyledUploadIcon,
  StyledAvatarSection,
} from './AvatarForm.styled';
import { FormError } from './FormError';

export const AvatarForm = () => {
  const dispatch = useDispatch();
  const [fieldValue, setFieldValue] = useState(null);
  const { name = '' } = useSelector(selectUserData);

  // const uploadAvatar = dispatch(uploadUserAvatar());

  //Submit function
  function handleSubmit(values, { resetForm }) {
    const myData = new FormData();

    myData.append('avatar', fieldValue.file);
    // todo
    console.log('Form was Submit: ', values, fieldValue.file, myData);
    dispatch(uploadUserAvatarThunk(myData));
    return;
  }

  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

  const INITIAL_VALUES = { avatar: null };
  //Formik Validation schema
  const userSchema = object().shape({
    avatar: mixed()
      .nullable()
      .required('A file is required')
      .test(
        'Fichier taille',
        'upload file',
        value => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
        'format',
        'upload file',
        value => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });
  // Avatarka
  const { avatarUrl } = useSelector(selectUserData);
  console.log('Avatar: ', avatarUrl);
  const { imgUrl = 'WaterTracker/avatar-neutral.jpg', imgName = 'Avatar' } = {
    imgUrl: avatarUrl,
    imgName: `Avatar for ${name}`,
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      // validationSchema={userSchema}
    >
      <FormStyled>
        <Label htmlFor="avatar">Your photo</Label>
        <InputContainer>
          {/* <StyledImgLabel>Your photo</StyledImgLabel> */}
          <StyledAvatarSection>
            <StyledImg src={imgUrl} alt={imgName} />
            <StyledUploadButton type="submit">
              <StyledUploadIcon />
              Upload a photo
            </StyledUploadButton>
          </StyledAvatarSection>
          <Input
            type="file"
            name="avatar"
            id="avatar"
            onChange={event => {
              setFieldValue({ file: event.currentTarget.files[0] });
            }}
            // title="Enter your name"
            // placeholder="Your name"
          />
        </InputContainer>
        <FormError name="avatar" />

        {/* <Button type="submit">Upload a photo</Button> */}
      </FormStyled>
    </Formik>
  );
};

/* <StyledImgLabel>Your photo</StyledImgLabel>
      <StyledAvatarSection>
        <StyledImg src={imgUrl} alt={imgName} />
        <StyledUploadButton>
          <StyledUploadIcon />
          Upload a photo
        </StyledUploadButton>
      </StyledAvatarSection> */
