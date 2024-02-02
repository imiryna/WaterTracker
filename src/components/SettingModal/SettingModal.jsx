import { UserForm } from './UserForm/UserForm';
import { toggleSettingsVisibility } from 'Store/modals/modalSlice';

// temp - user from auth - it is wrong way
import { selectAuthUserData } from 'Store/auth/authSelector';
import { selectUser } from 'Store/currentUser/currentUserSelectors';

import { useDispatch, useSelector } from 'react-redux';
import {
  StyledHeader,
  StyledImg,
  StyledImgLabel,
  StyledContainer,
  StyledTitle,
  StyledCloseButton,
  StyledCloseIcon,
  StyledUploadButton,
  StyledUploadIcon,
  StyledAvatarSection,
} from './SettingModal.styled';

export const Setting = imgData => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleSettingsVisibility());
  // temp - user from auth - it is wrong way
  // const { avatarUrl, name } = useSelector(selectAuthUserData);
  const { avatarUrl, name } = useSelector(selectUser);
  // console.log(user);

  const { imgUrl = 'Images/avatar-neutral.jpg', imgName = 'Avatar' } = {
    imgUrl: avatarUrl,
    imgName: `Avatar for ${name}`,
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>Setting</StyledTitle>
        <StyledCloseButton onClick={toggleModal}>
          <StyledCloseIcon />
        </StyledCloseButton>
      </StyledHeader>
      <StyledImgLabel>Your photo</StyledImgLabel>
      <StyledAvatarSection>
        <StyledImg src={imgUrl} alt={imgName} />
        <StyledUploadButton>
          <StyledUploadIcon />
          Upload a photo
        </StyledUploadButton>
      </StyledAvatarSection>
      <UserForm />
    </StyledContainer>
  );
};
