import React from 'react';

import { useDispatch } from 'react-redux';
import {
  MenuCss,
  DropdownCss,
  OutlineCss,
  BoxCss,
  ArrowCss,
  WrapCss,
} from './DropdownMenu.styled';

import {
  toggleLogoutVisibility,
  toggleSettingsVisibility,
} from 'Store/modals/modalSlice';

export const DropdownMenu = () => {
  const dispatcher = useDispatch();

  const openLogoutDialog = () => {
    dispatcher(toggleLogoutVisibility());
  };

  const toggleModal = () => dispatcher(toggleSettingsVisibility());

  return (
    <DropdownCss>
      <MenuCss>
        <WrapCss>
          <OutlineCss />
          <div onClick={toggleModal}>Setting</div>
        </WrapCss>

        <BoxCss>
          <ArrowCss />
          <div onClick={openLogoutDialog}>Log out</div>
        </BoxCss>
      </MenuCss>
    </DropdownCss>
  );
};
