import { Formik } from 'formik';
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
  Radio,
  RadioLabel,
  Label,
  Wrapper,
  Button,
} from './UserForm.styled';
import { FormError } from './FormError';

export const UserForm = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleSettingsVisibility());
  const {
    name = '',
    email = '',
    gender = 'woman',
  } = useSelector(selectUserData);

  //Submit function
  function handleSubmit(values, { resetForm }) {
    // todo - проверку совпадения паролей - отправку данных без проверочного пароля
    console.log('Form was Submit: ', values);
    const { email, gender, name, password, newpass, repitpass } = values;
    const userData = { email, gender, name, password, newPassword: newpass };
    if (newpass !== repitpass) {
      console.log('Пароли не совпадают');
      return;
    }
    dispatch(updateCurrentUserThunk(userData));
    resetForm();
    // todo - доделать чтобы закрывалось после ответа сервера
    toggleModal();
    return;
  }
  // let userName;
  // if (name) {
  //   userName = name;
  // } else {
  //   userName = '';
  // }
  let userGender;
  if (gender) {
    if (gender === 'male') userGender = 'man';
    if (gender === 'female') userGender = 'woman';
  } else {
    userGender = 'woman';
  }

  const INITIAL_VALUES = {
    gender: userGender,
    name,
    email,
    password: '',
    newpass: '',
    repitpass: '',
  };
  //Formik Validation schema
  const userSchema = object().shape({
    name: string().min(5).max(40).required('Name is required'),
    email: string().email().required('Email is required'),
    password: string().matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/gu,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
    newpass: string().matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/gu,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
    repitpass: string().oneOf([ref('newpass'), null], 'Passwords must match'),
  });
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormStyled>
        {/* <Label htmlFor="avatar">Your photo</Label>
        <Input
          type="file"
          name="avatar"
          id="avatar"
          // title="Enter your name"
          // placeholder="Your name"
        />
        <FormError name="avatar" /> */}

        <FlexWrapper>
          <Wrapper>
            <Title id="my-radio-group">Your gender identity</Title>
            <div role="group" aria-labelledby="my-radio-group">
              <RadioLabel>
                <Radio type="radio" name="gender" value="woman" />
                Woman
              </RadioLabel>
              <RadioLabel>
                <Radio type="radio" name="gender" value="man" />
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
            <Label className="small" htmlFor="password">
              Outdated password:
            </Label>
            <Input
              type="text"
              name="password"
              id="password"
              title="Enter your current password"
              placeholder="Password"
            />
            <FormError name="password" />

            <Label className="small" htmlFor="newpass">
              New password:
            </Label>
            <Input
              type="text"
              name="newpass"
              id="newpass"
              title="Enter new password"
              placeholder="Password"
            />
            <FormError name="newpass" />

            <Label className="small" htmlFor="repit">
              Repit password:
            </Label>
            <Input
              type="text"
              name="repitpass"
              id="repitpass"
              title="Repit new password"
              placeholder="Password"
            />
            <FormError name="repitpass" />
          </Wrapper>
        </FlexWrapper>
        <Button type="submit">Save</Button>
      </FormStyled>
    </Formik>
  );
};
