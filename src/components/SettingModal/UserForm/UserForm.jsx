import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { object, string, ref } from 'yup';

import { toggleSettingsVisibility } from 'Store/modals/modalSlice';
import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import {
  updateCurrentUserThunk,
  getCurrentUserThunk,
} from 'Store/currentUser/currentUserThunk';

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
    gender = 'female',
  } = useSelector(selectUserData);

  //Submit function
  function handleSubmit(values, { resetForm }) {
    // todo - проверку совпадения паролей - отправку данных без проверочного пароля
    console.log('Form was Submit: ', values);
    const { email, gender, name, currentPassword, newPassword, repitpass } =
      values;
    // Ubiraem iz objecta pustye svojstva

    let userData = {
      email,
      gender,
      name,
      currentPassword,
      newPassword,
    };

    Object.entries(userData).map(a =>
      Object.entries(a[1]).filter(b => b[1].length).length
        ? a
        : delete userData[a[0]]
    );
    console.log('Check: ', userData);

    if (newPassword !== repitpass) {
      console.log('Пароли не совпадают');
      return;
    }
    dispatch(updateCurrentUserThunk(userData));

    // todo - доделать чтобы закрывалось после ответа сервера
    resetForm();
    toggleModal();
    // todo - доделать чтобы после закрытия обновлялись данные текущего пользователя
    dispatch(getCurrentUserThunk());
    return;
  }
  // let userName;
  // if (name) {
  //   userName = name;
  // } else {
  //   userName = '';
  // }

  const INITIAL_VALUES = {
    gender,
    name,
    email,
    currentPassword: '',
    newPassword: '',
    repitpass: '',
  };
  //Formik Validation schema
  const userSchema = object().shape({
    name: string().min(5).max(40).required('Name is required'),
    email: string().email().required('Email is required'),
    currentPassword: string().min(8).required('Password is required'),
    //   string().matches(
    //   /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/gu,
    //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    // ),
    newPassword: string().matches(
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
            <Input
              type="text"
              name="currentPassword"
              id="currentPassword"
              title="Enter your current password"
              placeholder="Password"
            />
            <FormError name="currentPassword" />

            <Label className="small" htmlFor="newPassword">
              New password:
            </Label>
            <Input
              type="text"
              name="newPassword"
              id="newPassword"
              title="Enter new password"
              placeholder="Password"
            />
            <FormError name="newPassword" />

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
