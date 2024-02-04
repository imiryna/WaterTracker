import { UserForm } from './UserForm/UserForm';
import { AvatarForm } from './AvatarForm/AvatarForm';
import { toggleSettingsVisibility } from 'Store/modals/modalSlice';
// import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledHeader,
  // StyledImg,
  // StyledImgLabel,
  StyledContainer,
  StyledTitle,
  StyledCloseButton,
  StyledCloseIcon,
  // StyledUploadButton,
  // StyledUploadIcon,
  // StyledAvatarSection,
} from './SettingModal.styled';

export const Setting = () => {
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleSettingsVisibility());

  // const { avatarUrl, name } = useSelector(selectUserData);
  // console.log('Avatar: ', avatarUrl);
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
      {/* <StyledImgLabel>Your photo</StyledImgLabel>
      <StyledAvatarSection>
        <StyledImg src={imgUrl} alt={imgName} />
        <StyledUploadButton>
          <StyledUploadIcon />
          Upload a photo
        </StyledUploadButton>
      </StyledAvatarSection> */}
      <AvatarForm />
      <UserForm />
    </StyledContainer>
  );
};
