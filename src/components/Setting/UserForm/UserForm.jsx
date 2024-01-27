import { Formik } from 'formik';
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
    console.log(values);
    // dispatch(logIn({ email, password }));
    resetForm();
    return;
  };
  const INITIAL_VALUES = {
    gender: '',
    name: '',
    email: '',
    password: '',
    newpass: '',
    repit: '',
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      // validationSchema={schema}
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
            <FormError name="name" />
            <Label htmlFor="name">Your name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Enter your name"
              placeholder="Your name"
              required
            />
            <FormError name="name" />
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Enter email"
              placeholder="Email"
              required
            />
            <FormError name="email" />
          </Wrapper>
          <Wrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              type="text"
              name="password"
              id="password"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Enter password"
              placeholder="Password"
              required
            />
            <FormError name="password" />
            <Label htmlFor="new-pass">New password</Label>
            <Input
              type="text"
              name="new-pass"
              id="new-pass"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Enter new password"
              placeholder="New password"
              required
            />
            <FormError name="new-pass" />
            <Label htmlFor="repit">Repit password</Label>
            <Input
              type="text"
              name="repit"
              id="repit"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Repit new password"
              placeholder="Repit password"
              required
            />
            <FormError name="repit" />
          </Wrapper>
        </FlexWrapper>
        <Button type="submit" mt={3}>
          Save
        </Button>
      </FormStyled>
    </Formik>
  );
};
