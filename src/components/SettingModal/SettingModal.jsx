import { UserForm } from './UserForm/UserForm';
import { AvatarForm } from './AvatarForm/AvatarForm';
import { toggleSettingsVisibility } from 'Store/modals/modalSlice';
// import { selectUserData } from 'Store/currentUser/currentUserSelectors';
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
  // const { avatarUrl, name } = useSelector(selectUserData);
  // const { imgUrl = 'WaterTracker/avatar-neutral.jpg', imgName = 'Avatar' } = {
  //   imgUrl: avatarUrl,
  //   imgName: `Avatar for ${name}`,
  // };

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
