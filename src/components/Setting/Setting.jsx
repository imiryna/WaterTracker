import { UserForm } from './UserForm';
import { Img, ImgLabel, Container } from './Setting.styled';

export const Setting = imgData => {
  // tmp image data
  const { imgUrl, imgName } = {
    imgUrl:
      'https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg?w=740',
    imgName: 'Morda lica',
  };

  // const { imgUrl, imgName } = imgData;
  return (
    <Container>
      <h2>Setting</h2>
      <ImgLabel>Your photo</ImgLabel>
      <Img src={imgUrl} alt={imgName} />
      <UserForm />
    </Container>
  );
};
