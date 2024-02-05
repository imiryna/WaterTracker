import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// selectors
import { selectAuthenticated } from 'Store/auth/authSelector';
import { selectUserData } from 'Store/currentUser/currentUserSelectors';
import { selectUserSettings, selectDropdown } from 'Store/modals/modalSelector';
// import { selectUser } from 'Store/currentUser/currentUserSelectors';
// import { getCurrentUserThunk } from 'Store/currentUser/currentUserThunk';
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

import { Modal } from 'components/Modal/Modal';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { Setting } from 'components/SettingModal/SettingModal';
import LogoutConfirmationDialog from 'components/LogOutModal/LogOutModal';
// import { getCurrentUser } from 'services/api';

export const Navigation = () => {
  const dispatcher = useDispatch();

  // selectors
  const dropdownShown = useSelector(selectDropdown);
  const userSettingsModalShown = useSelector(selectUserSettings);
  const isAuthed = useSelector(selectAuthenticated);
  const currentUser = useSelector(selectUserData);
  const isConfirmLogoutShown = useSelector(selectLogout);

  // local variables
  let shownName = '';
  if (isAuthed) {
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
