import React, {useState} from 'react';
import {
  MenuCss,
  DropdownCss,
  OutlineCss,
  BoxCss,
  ArrowCss,
} from './DropdownMenu.styled';
import LogoutConfirmationDialog from 'components/LogOutModal/LogOutModal';

export const DropdownMenu = () => {

  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const openLogoutDialog = () => {
    setConfirmationVisible(true);
  };

  const closeLogoutDialog = () => {
    setConfirmationVisible(false);
  };


  return (
    <DropdownCss>
      <MenuCss>
        <BoxCss>
          <OutlineCss />
          <div>Setting</div>
        </BoxCss>

        <BoxCss>
          <ArrowCss />
          
            <div onClick={openLogoutDialog}>Log out</div>
            <LogoutConfirmationDialog
              visible={confirmationVisible}
              onHide={closeLogoutDialog}
            />
          
          
        </BoxCss>
      </MenuCss>
    </DropdownCss>
  );
};
