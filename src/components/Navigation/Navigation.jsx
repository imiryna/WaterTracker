import React from 'react';
import { Outlet } from 'react-router-dom';
import { selectAuthUserData } from '../../Redux/auth/authSelector';
import { useSelector } from 'react-redux';

import {
  NavCss,
  NavLinkCss,
  LogoText,
  TextCss,
  LogoIcon,
  UserIcon,
} from './Navigation.styled';

// temp section ZooBeeN for modal
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { Setting } from 'components/SettingModal/SettingModal';
// import { getCurrentUser } from 'services/api';
// END OF Temp section

export const Navigation = () => {
  // temp section ZooBeeN for modal
  const [showModal, setShowModal] = useState(false);
  const [openDropbox, setOpenDropbox] = useState(false);

  const { email } = useSelector(selectAuthUserData);

  const toggleDropbox = () => {
    setOpenDropbox(!openDropbox);
  };
  const toggleModal = () => setShowModal(pshowModal => !pshowModal);
  // END OF Temp section

  const openUserSetting = e => {
    // here should be called function of modal component to <open> modal
    alert('User settings modal');
  };
  return (
    <>
      {/* // temp section ZooBeeN for modal */}
      {/* <button type="button" onClick={toggleModal()}>
        Modalochka ;)
      </button>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <Setting />
        </Modal>
      )} */}
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

        <NavLinkCss>
          {email ? (
            <TextCss>{email.split('@')[0]}</TextCss>
          ) : (
            <TextCss>Sign in</TextCss>
          )}

          <UserIcon onClick={toggleDropbox} />
          {openDropbox ? <DropdownMenu /> : null}
        </NavLinkCss>
      </NavCss>
      <Outlet />
    </>
  );
};

export default Navigation;
