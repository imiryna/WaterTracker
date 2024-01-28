import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavCss = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 94px;
  align-items: center;
  margin-bottom: 24px;
  /* margin-left: 94; */
  /* margin-right: 94; */

  @media (min-width: 768px) {
    gap: 512px;
    margin-bottom: 40px;
  }

  @media (min-width: 1440px) {
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
  margin-right: 8px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
