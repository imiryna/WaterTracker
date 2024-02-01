import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// selectors
import {
  selectAuthenticated,
  selectAuthUserData,
} from 'Store/auth/authSelector';
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

// temp section ZooBeeN for modal
import { Modal } from 'components/Modal/Modal';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { Setting } from 'components/SettingModal/SettingModal';
import LogoutConfirmationDialog from 'components/LogOutModal/LogOutModal';
// import { getCurrentUser } from 'services/api';
// END OF Temp section

export const Navigation = () => {
  // temp section ZooBeeN for modal
  const dispatcher = useDispatch();

  // selectors
  const dropdownShown = useSelector(selectDropdown);
  const userSettingsModalShown = useSelector(selectUserSettings);
  const isAuthed = useSelector(selectAuthenticated);
  const currentUser = useSelector(selectAuthUserData);
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
            <UserAvatarCss
              style={{ backgroundColor: getRandomHexColor() }}
            ></UserAvatarCss>
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
