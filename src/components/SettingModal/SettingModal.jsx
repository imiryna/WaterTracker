import { UserForm } from './UserForm/UserForm';
import { toggleSettingsVisibility } from '../../Store/modals/modalSlice';
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
  // tmp image data
  // todo - картинка из базы
  const { imgUrl, imgName } = {
    imgUrl:
      'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg?w=740',
    imgName: 'Morda lica',
  };

  // const { imgUrl, imgName } = imgData;
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>Setting</StyledTitle>
        <StyledCloseButton
          onClick={() => {
            console.log('Close pressed');
            toggleModal();
          }}
        >
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
