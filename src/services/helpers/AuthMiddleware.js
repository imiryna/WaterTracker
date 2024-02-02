import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'Store/auth/authSelector';
import { refreshUserThunk } from 'Store/auth/authOperations';

export const AuthMiddleware = ({ children }) => {
  const dispatcher = useDispatch();
  const token = useSelector(selectAuthToken);

  if (token) {
    console.log('LOGIN AND GLORY! REFRESH IT');
    dispatcher(refreshUserThunk());
  } else {
    console.log('GO TO LOGIN!');
  }
  return children;
};
