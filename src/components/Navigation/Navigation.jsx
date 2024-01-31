import React from 'react';
import { Outlet } from 'react-router-dom';
// selectors
// import { selectAuthUserData } from 'Store/auth/authSelector';
import { selectUserSettings } from 'Store/modals/modalSelector';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { toggleSettingsVisibility } from 'Store/modals/modalSlice';

import {
  NavCss,
  NavLinkCss,
  LogoText,
  TextCss,
  LogoIcon,
  ArrowIcon,
  UserSettingCss,
  UserAvatarCss,
} from './Navigation.styled';

// temp section ZooBeeN for modal
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { Setting } from 'components/SettingModal/SettingModal';
import { selectUser } from 'Store/currentUser/currentUserSelectors';
// import { getCurrentUser } from 'services/api';
// END OF Temp section

export const Navigation = () => {
  // temp section ZooBeeN for modal
  // const [showModal, setShowModal] = useState(false);
  const [openDropbox, setOpenDropbox] = useState(false);
  const userSettingsModalShown = useSelector(selectUserSettings);
  const dispatcher = useDispatch();

  // const { email } = useSelector(selectAuthUserData);
  const currentUser = useSelector(selectUser);
  const email = currentUser.email.split('@')[0];
  const name = currentUser.name?.split(' ')[0];
  const shownName = name ? name : email;

  const getRandomHexColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;

  const toggleDropbox = () => {
    setOpenDropbox(!openDropbox);
  };
  const toggleModal = () => dispatcher(toggleSettingsVisibility());
  // END OF Temp section

  // const openUserSetting = e => {
  //   // here should be called function of modal component to <open> modal
  //   alert('User settings modal');
  // };
  return (
    <>
      {/* // temp section ZooBeeN for modal */}
      <button type="button" onClick={toggleModal}>
        Modalochka ;)
      </button>
      {userSettingsModalShown && (
        <Modal toggleModal={toggleModal}>
          <Setting />
        </Modal>
      )}
      {/* // END OF Temp section */}

      <NavCss>
        <NavLinkCss to={'/home'}>
          <LogoIcon />
          <LogoText>Tracker of water</LogoText>
        </NavLinkCss>

        {/* <NavLinkCss to={'/signin'}>
          <TextCss>Sign in</TextCss>
          <UserIco />
        </NavLinkCss> */}

        <UserSettingCss>
          <button onClick={toggleDropbox}>
            {openDropbox ? <DropdownMenu /> : null}
          </button>
          <TextCss>{shownName}</TextCss>
          <UserAvatarCss
            style={{ backgroundColor: getRandomHexColor() }}
          ></UserAvatarCss>

          <ArrowIcon />
        </UserSettingCss>
      </NavCss>
      <Outlet />
    </>
  );
};

export default Navigation;
