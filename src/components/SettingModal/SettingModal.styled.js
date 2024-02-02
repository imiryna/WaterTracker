import styled from 'styled-components';
import { ReactComponent as CloseIcon } from 'Images/Icons/close.svg';
import { ReactComponent as UploadIcon } from 'Images/Icons/upload.svg';

export const StyledContainer = styled.div`
  /* width: 600px; */
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  display: inline-flex;
  padding: 32px 24px;
  flex-direction: column;
  background: var(--Primery-Color-White, #fff);
  border-radius: 10px;
  /* overflow-y: scroll; */

  @media screen and (min-width: 320px) {
    width: 280px;
    /* overflow-y: scroll; */
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1440px) {
    width: 1000px;
  }
`;
export const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const StyledTitle = styled.h2`
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.23em; /* 123.077% */
`;
export const StyledCloseButton = styled.button`
  margin-left: auto;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;
export const StyledCloseIcon = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  stroke: var(--primery-blue);
`;

export const StyledAvatarSection = styled.div`
  display: flex;
`;
export const StyledImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
export const StyledImgLabel = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;
export const StyledUploadButton = styled.button`
  margin-left: 5px;
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-weight: 500;
  font-size: 15px;
  color: var(--primery-blue);
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;
export const StyledUploadIcon = styled(UploadIcon)`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  stroke: var(--primery-blue);
  stroke-width: 80px;
`;
