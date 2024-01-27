import { Formik } from 'formik';
import { object, string, ref } from 'yup';
// import { useDispatch } from 'react-redux';

import {
  FlexWrapper,
  FormStyled,
  Input,
  RadioGrup,
  Radio,
  RadioLabel,
  Label,
  Wrapper,
  Button,
} from './UserForm.styled';
import { FormError } from './FormError';
// import { logIn } from 'redux/auth-operations';

export const UserForm = () => {
  // const dispatch = useDispatch();
  //Submit function
  const handleSubmit = (values, { resetForm }) => {
    // const { email, password } = values;
    // todo - state
    console.log('Form was Submit: ', values);
    // dispatch(logIn({ email, password }));
    resetForm();
    return;
  };

  const INITIAL_VALUES = {
    gender: 'woman',
    name: '',
    email: '',
    password: '',
    newpass: '',
    repitpass: '',
  };
  //Formik Validation schema
  const userSchema = object().shape({
    gender: string().required('Gender is required'),
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
        <FlexWrapper>
          <Wrapper>
            <RadioGrup id="my-radio-group">Your gender identity</RadioGrup>
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
            <FormError name="gender" />

            <Label htmlFor="name">Your name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              title="Enter your name"
              placeholder="Your name"
            />
            <FormError name="name" />

            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              title="Enter your email"
              placeholder="Email"
            />
            <FormError name="email" />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="text"
              name="password"
              id="password"
              title="Enter your current password"
              placeholder="Current password"
            />
            <FormError name="password" />

            <Label htmlFor="newpass">New password</Label>
            <Input
              type="text"
              name="newpass"
              id="newpass"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Enter new password"
              placeholder="New password"
            />
            <FormError name="newpass" />

            <Label htmlFor="repit">Repit password</Label>
            <Input
              type="text"
              name="repitpass"
              id="repitpass"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Repit new password"
              placeholder="Repit password"
            />
            <FormError name="repitpass" />
          </Wrapper>
        </FlexWrapper>
        <Button type="submit" mt={3}>
          Save
        </Button>
      </FormStyled>
    </Formik>
  );
};
