import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// selectors
import { selectAuthenticated } from 'Store/auth/authSelector';
import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import { selectUserSettings, selectDropdown } from 'Store/modals/modalSelector';
import { selectLogout } from 'Store/modals/modalSelector';
import { toggleLogoutVisibility } from 'Store/modals/modalSlice';

// actions
import {
  toggleSettingsVisibility,
  toggleDropdownVisibility,
} from 'Store/modals/modalSlice';

import {
  NavCss,
  NavLinkCss,
  LogoText,
  TextCss,
  LogoIcon,
  ArrowIcon,
  UserSettingCss,
  UserAvatarCss,
  UserIcon,
} from './Navigation.styled';

// temp section ZooBeeN for modal
import { Modal } from 'components/Modal/Modal';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { Setting } from 'components/SettingModal/SettingModal';
import LogoutConfirmationDialog from 'components/LogOutModal/LogOutModal';
import { getCurrentUserThunk } from 'Store/currentUser/currentUserThunk';
// END OF Temp section

export const Navigation = () => {
  // temp section ZooBeeN for modal
  const isLogged = useSelector(selectAuthenticated)
  const dispatcher = useDispatch();

  // selectors
  const dropdownShown = useSelector(selectDropdown);
  const userSettingsModalShown = useSelector(selectUserSettings);
  const isAuthed = useSelector(selectAuthenticated);
  const currentUser = useSelector(selectUserData);
  const isConfirmLogoutShown = useSelector(selectLogout); 


  // local variables
  let shownName = '';
  if (currentUser.email !== null && currentUser.name !== null) {
    const email = currentUser.email.split('@')[0];
    const name = currentUser.name?.split(' ')[0];
    shownName = name ? name : email;
  }

  const getRandomHexColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;

  const toggleDropbox = () => {
    dispatcher(toggleDropdownVisibility());
  };
  const toggleModal = () => dispatcher(toggleSettingsVisibility());

  const closeLogoutDialog = () => {
    dispatcher(toggleLogoutVisibility());
  };

  // END OF Temp section

  // const openUserSetting = e => {
  //   // here should be called function of modal component to <open> modal
  //   alert('User settings modal');
  // };
  return (
    <>
      {/* Confirmation window to confirm Logout */}
      {isConfirmLogoutShown && (
        <LogoutConfirmationDialog
          visible={isConfirmLogoutShown}
          onHide={closeLogoutDialog}
        />
      )}

      {userSettingsModalShown && (
        <Modal toggleModal={toggleModal}>
          <Setting />
        </Modal>
      )}
      {/* // END OF Temp section */}

      <NavCss>
        <NavLinkCss to={'/'}>
          <LogoIcon />
          <LogoText>Tracker of water</LogoText>
        </NavLinkCss>

        {!isAuthed ? (
          <NavLinkCss to={'/signin'}>
            <TextCss>Sign in</TextCss>
            <UserIcon />
          </NavLinkCss>
        ) : (
          <UserSettingCss onClick={toggleDropbox}>
            <TextCss>{shownName}</TextCss>
            {!currentUser.avatarUrl ? (
              <UserAvatarCss
                style={{ backgroundColor: getRandomHexColor() }}
              ></UserAvatarCss>
            ) : (
              <UserAvatarCss
                style={{ backgroundImage: `url(${currentUser.avatarUrl})` }}
              ></UserAvatarCss>
            )}
            <ArrowIcon />
            {dropdownShown ? <DropdownMenu /> : null}
          </UserSettingCss>
        )}
      </NavCss>
      <Outlet />
    </>
  );
};

export default Navigation;
