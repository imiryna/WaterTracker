import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'Images/Icons/logo.svg';
import { ReactComponent as User } from 'Images/Icons/user.svg';

export const LogoIcon = styled(Logo)`
  width: 40px;
  height: 48px;
`;
export const UserIcon = styled(User)`
  width: 28px;
  height: 28px;
  /* fill: var(--primery-black); */
  stroke: var(--primery-black);
`;

export const NavCss = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 94px;
  align-items: center;
  margin-bottom: 24px;
  position: fixed;
  top: 8px;
  right: 50%;
  transform: translate(50%);
  width: 280px;
  border: 3px transparent;

  @media (min-width: 768px) {
    top: 16px;
    width: 704px;
    gap: 512px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
    width: 1216px;
    gap: 1024px;
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

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
