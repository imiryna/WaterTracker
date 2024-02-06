import React, { useState } from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { object, string, ref } from 'yup';
import { toggleSettingsVisibility } from 'Store/modals/modalSlice';
import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import { updateCurrentUserThunk } from 'Store/currentUser/currentUserThunk';

// Styles
import {
  FlexWrapper,
  FormStyled,
  Input,
  Title,
  RadioGroup,
  Radio,
  RadioLabel,
  Label,
  Wrapper,
  Button,
  InputContainer,
  ButtonIcon,
  ShowPassIcon,
  HidePassIcon,
} from './UserForm.styled';
import { FormError } from './FormError';

export const UserForm = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleSettingsVisibility());
  const {
    name = '',
    email = '',
    gender = 'female',
  } = useSelector(selectUserData);
  // for checking changing fields
  const startUserData = { name, email, gender };
  // Hide-Show passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  //Submit function
  async function handleSubmit(values, { resetForm }) {
    // Nothing to change
    if (
      startUserData.name === values.name &&
      startUserData.email === values.email &&
      startUserData.gender === values.gender
    ) {
      if (values.newPassword === '') {
        toast.info('Noting to change');
        return;
      }
    }
    if (values.newPassword && values.currentPassword === '') {
      toast.error('Current Password is necessary!!!');
      return;
    }
    const uploadData = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
    };
    // Remove empty properties
    Object.entries(uploadData).map(a =>
      Object.entries(a[1]).filter(b => b[1].length).length
        ? a
        : delete uploadData[a[0]]
    );

    const e = await dispatch(updateCurrentUserThunk(uploadData));

    if (e.payload.message === 'User updated successfully') {
      resetForm();
      toggleModal();
    }

    return;
  }

  const INITIAL_VALUES = {
    gender,
    name,
    email,
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  };
  //Formik Validation schema
  const userSchema = object().shape({
    name: string().min(3).max(40).required('Name is required'),
    email: string().email().required('Email is required'),
    currentPassword: string().min(8),
    newPassword: string().matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/gu,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
    ),
    repeatPassword: string().oneOf(
      [ref('newPassword'), null],
      'Passwords must match'
    ),
  });

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {({ errors, touched }) => (
        <FormStyled name="form">
          <FlexWrapper>
            <Wrapper>
              <Title id="my-radio-group">Your gender identity</Title>
              <RadioGroup role="group" aria-labelledby="my-radio-group">
                <RadioLabel>
                  <Radio type="radio" name="gender" value="female" />
                  Woman
                </RadioLabel>
                <RadioLabel>
                  <Radio type="radio" name="gender" value="male" />
                  Man
                </RadioLabel>
              </RadioGroup>

              <Label htmlFor="name">Your name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                title="Enter your name"
                placeholder="Your name"
                className={errors.name ? 'error' : ''}
              />
              <FormError name="name" />

              <Label htmlFor="email">E-mail</Label>
              <Input
                type="text"
                name="email"
                id="email"
                title="Enter your email"
                placeholder="E-mail"
                className={errors.email ? 'error' : ''}
              />
              <FormError name="email" />
            </Wrapper>
            <Wrapper>
              <Title>Password</Title>
              <Label className="small" htmlFor="currentPassword">
                Outdated password:
              </Label>
              <InputContainer>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="currentPassword"
                  id="currentPassword"
                  title="Enter your current password"
                  placeholder="Password"
                  className={errors.currentPassword ? 'error' : ''}
                />
                <ButtonIcon
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <ShowPassIcon /> : <HidePassIcon />}
                </ButtonIcon>
              </InputContainer>
              <FormError name="currentPassword" />

              <Label className="small" htmlFor="newPassword">
                New password:
              </Label>
              <InputContainer>
                <Input
                  type={showNewPassword ? 'text' : 'password'}
                  name="newPassword"
                  id="newPassword"
                  title="Enter new password"
                  placeholder="Password"
                  className={errors.newPassword ? 'error' : ''}
                />
                <ButtonIcon
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <ShowPassIcon /> : <HidePassIcon />}
                </ButtonIcon>
              </InputContainer>
              <FormError name="newPassword" />

              <Label className="small" htmlFor="repeat">
                Repeat password:
              </Label>
              <InputContainer>
                <Input
                  type={showRepPassword ? 'text' : 'password'}
                  name="repeatPassword"
                  id="repeatPassword"
                  title="repeat new password"
                  placeholder="Password"
                  className={errors.repeatPassword ? 'error' : ''}
                />
                <ButtonIcon
                  type="button"
                  onClick={() => setShowRepPassword(!showRepPassword)}
                >
                  {showRepPassword ? <ShowPassIcon /> : <HidePassIcon />}
                </ButtonIcon>
              </InputContainer>
              <FormError name="repeatPassword" />
            </Wrapper>
          </FlexWrapper>
          <Button type="submit">Save</Button>
        </FormStyled>
      )}
    </Formik>
  );
};
