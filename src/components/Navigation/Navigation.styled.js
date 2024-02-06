import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'Images/Icons/logo.svg';
import { ReactComponent as User } from 'Images/Icons/user.svg';
import { ReactComponent as Arrow } from 'Images/Icons/arrow-down.svg';

export const LogoIcon = styled(Logo)`
  width: 40px;
  height: 48px;
`;
export const UserIcon = styled(User)`
  width: 28px;
  height: 28px;
  stroke: var(--primery-black);
`;
export const ArrowIcon = styled(Arrow)`
  width: 16px;
  height: 16px;
  fill: var(--primery-blue);
`;

export const NavCss = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 66px;
  padding-top: 16px;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 100;

  width: 100%;
  background-color: var(--primery-white);

  @media (min-width: 1440px) {
    padding-left: 112px;
    padding-right: 112px;
  }
`;
export const WraperCss = styled.div`
  display: flex;
  flex-direction: row;
  gap: 54px;
  align-items: center;
  justify-content: center;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    gap: 480px;

    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    gap: 992px;
    margin-bottom: 49px;
  }
`;
export const NavLinkCss = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const LogoText = styled.div`
  color: var(--primery-blue);
  font-family: var(--primery-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 58px;
  height: 28px;
`;

export const TextCss = styled.p`
  color: var(--primery-blue);
  font-family: var(--primery-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.25;
  }
`;

export const UserSettingCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const UserAvatarCss = styled.div`
  display: block;
  border-radius: 28px;
  margin-left: 4px;
  width: 28px;
  height: 28px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
