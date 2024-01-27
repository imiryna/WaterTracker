import { ErrorText } from '../UserForm.styled';
import { ErrorMessage } from 'formik';
//Validation Error function
export function FormError({ name }) {
  console.log('FormError-catch');
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
}
