import { UserForm } from './UserForm/UserForm';
import { AvatarForm } from './AvatarForm/AvatarForm';
import { toggleSettingsVisibility } from 'Store/modals/modalSlice';
import { useDispatch } from 'react-redux';
import {
  StyledHeader,
  StyledContainer,
  StyledTitle,
  StyledCloseButton,
  StyledCloseIcon,
} from './SettingModal.styled';

export const Setting = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleSettingsVisibility());

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>Setting</StyledTitle>
        <StyledCloseButton onClick={toggleModal}>
          <StyledCloseIcon />
        </StyledCloseButton>
      </StyledHeader>

      <AvatarForm />
      <UserForm />
    </StyledContainer>
  );
};
