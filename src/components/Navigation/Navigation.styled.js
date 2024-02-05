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
  display: flex;
  flex-direction: row;
  gap: 54px;
  align-items: center;
  margin-bottom: 24px;
  position: fixed;
  top: 8px;
  right: 50%;
  transform: translate(50%);
  width: 280px;
  border: 3px transparent;
  background-color: var(--primery-white);

  @media (min-width: 768px) {
    top: 16px;
    width: 704px;
    gap: 480px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    width: 1216px;
    gap: 992px;
    margin-bottom: 49px;
  }
`;
export const NavLinkCss = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  line-height: 1.25;
  width: 54px;
  margin-right: 8px;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const UserSettingCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarCss = styled.div`
  display: block;
  border-radius: 28px;
  margin-left: 4px;
  margin-right: 8px;
  width: 28px;
  height: 28px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
