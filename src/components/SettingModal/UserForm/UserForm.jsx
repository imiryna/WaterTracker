import React, { useState } from 'react';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';
import { toggleSettingsVisibility } from 'Store/modals/modalSlice';
import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import { updateCurrentUserThunk } from 'Store/currentUser/currentUserThunk';

// Styles
import {
  FlexWrapper,
  FormStyled,
  Input,
  Title,
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
  // for checking chenging fields
  const startUserData = { name, email, gender };
  // Hide-Show passwords
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);
  // controlled elements
  const [passState, setPassState] = useState('');
  const [newPassState, setNewPassState] = useState('');

  //Submit function
  async function handleSubmit(values, { resetForm }) {
    if (
      startUserData.name === values.name &&
      startUserData.email === values.email &&
      startUserData.gender === values.gender
    ) {
      if (newPassState === '') {
        // toggleModal();
        toast.info('Noting to change');
        return console.log('Noting to change');
      }
    }

    if (passState === '') {
      toast.error('Current Password is necessary!!!');
      return console.log('Current is necessary');
    }
    const uploadData = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      currentPassword: passState,
      newPassword: newPassState,
    };
    // Remove empty properties
    Object.entries(uploadData).map(a =>
      Object.entries(a[1]).filter(b => b[1].length).length
        ? a
        : delete uploadData[a[0]]
    );

    const e = await dispatch(updateCurrentUserThunk(uploadData));
    console.log('Async dispatch ', e);
    // todo - доделать чтобы закрывалось после ответа сервера
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
    name: string().min(5).max(40).required('Name is required'),
    email: string().email().required('Email is required'),
    currentPassword: string().min(8),

    newPassword: string().matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/gu,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
    repitpass: string().oneOf([newPassState], 'Passwords must match'),
  });

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormStyled id="form">
        <FlexWrapper>
          <Wrapper>
            <Title id="my-radio-group">Your gender identity</Title>
            <div role="group" aria-labelledby="my-radio-group">
              <RadioLabel>
                <Radio type="radio" name="gender" value="female" />
                Woman
              </RadioLabel>
              <RadioLabel>
                <Radio type="radio" name="gender" value="male" />
                Man
              </RadioLabel>
            </div>

            <Label htmlFor="name">Your name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              title="Enter your name"
              placeholder="Your name"
            />
            <FormError name="name" />

            <Label htmlFor="email">E-mail</Label>
            <Input
              type="text"
              name="email"
              id="email"
              title="Enter your email"
              placeholder="E-mail"
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
                value={passState}
                onChange={e => {
                  setPassState(e.target.value);
                }}
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
                value={newPassState}
                onChange={e => {
                  setNewPassState(e.target.value);
                }}
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
    </Formik>
  );
};
