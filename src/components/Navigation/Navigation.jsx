import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  NavCss,
  NavLinkCss,
  LogoText,
  TextCss,
  LogoIco,
  UserIco,
} from './Navigation.styled';
// temp section ZooBeeN for modal
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { Setting } from 'components/SettingModal/SettingModal';
import { getCurrentUser } from 'services/api';
// END OF Temp section

export const Navigation = () => {
  // temp section ZooBeeN for modal
  const [showModal, setShowModal] = useState(false);
  const togleModal = () => setShowModal(pshowModal => !pshowModal);
  // END OF Temp section

  // const openUserSetting = e => {
  //   // here should be called function of modal component to <open> modal
  //   alert('User settings modal');
  // };
  const currentUser = getCurrentUser();
  console.log('Current user');
  console.log(currentUser);
  return (
    <>
      {/* // temp section ZooBeeN for modal */}
      <button
        type="button"
        onClick={() => {
          console.log('Button click');
          togleModal();
        }}
      >
        Modalochka ;)
      </button>
      {showModal && (
        <Modal togleModal={togleModal}>
          <Setting />
        </Modal>
      )}
      {/* // END OF Temp section */}

      <NavCss>
        <NavLinkCss to={'/home'}>
          <LogoIco />
          <LogoText>Tracker of water</LogoText>
        </NavLinkCss>

        <NavLinkCss to={'/signin'}>
          <TextCss>Sign in</TextCss>
          <UserIco />
        </NavLinkCss>
      </NavCss>
      <Outlet />
    </>
  );
};

export default Navigation;
