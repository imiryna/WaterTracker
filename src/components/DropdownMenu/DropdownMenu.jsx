import React from 'react';
import {
  MenuCss,
  DropdownCss,
  OutlineCss,
  BoxCss,
  ArrowCss,
} from './DropdownMenu.styled';

export const DropdownMenu = () => {
  return (
    <DropdownCss>
      <MenuCss>
        <BoxCss>
          <OutlineCss />
          <div>Setting</div>
        </BoxCss>

        <BoxCss>
          <ArrowCss />
          <div>Log out</div>
        </BoxCss>
      </MenuCss>
    </DropdownCss>
  );
};
