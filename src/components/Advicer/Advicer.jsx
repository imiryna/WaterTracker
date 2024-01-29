import React from 'react';

import {
  AdvicerCss,
  TitleCss,
  TextCss,
  WrapCss,
  IconBoxCss,
  GridBoxcss,
  NavLinkBtn,
  BtnText,
  ContentTextCss,
  CalendarArrowCss,
  ChatBarArrowCss,
  PersonalSettingsArr,
} from './Advicer.styled';

export const Advicer = () => {
  return (
    <div>
      <AdvicerCss>
        <WrapCss>
          <TitleCss>Water consumption tracker</TitleCss>
          <TextCss>Record daily water intake and track</TextCss>
        </WrapCss>
        <p>Tracker Benefits</p>
        <GridBoxcss>
          <IconBoxCss>
            <CalendarArrowCss />
            <ContentTextCss>Habit drive</ContentTextCss>
          </IconBoxCss>
          <IconBoxCss>
            <ChatBarArrowCss />
            <ContentTextCss>View statistics</ContentTextCss>
          </IconBoxCss>
          <IconBoxCss>
            <PersonalSettingsArr />
            <ContentTextCss>Personal rate setting</ContentTextCss>
          </IconBoxCss>
        </GridBoxcss>

        <NavLinkBtn to={'/signin'}>
          <BtnText>Try tracker</BtnText>
        </NavLinkBtn>
      </AdvicerCss>
      <div>
        <div>
          <Drop />
          <p>Supply of nutrients to all organs</p>
        </div>
        <div>
          <Drop />
          <p>Providing oxygen to the lungs</p>
        </div>
        <div>
          <Drop />
          <p>Maintaining the work of the heart</p>
        </div>
        <div>
          <Drop />
          <p>Release of processed substances</p>
        </div>
        <div>
          <Drop />
          <p>Ensuring the stability of the internal environment</p>
        </div>
        <div>
          <Drop />
          <p>Maintaining within the normal temperature</p>
        </div>
        <div>
          <Drop />
          <p>Maintaining an immune system capable of resisting disease</p>
        </div>
      </div>
    </div>
  );
};

export const Drop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
  >
    <circle cx="4" cy="4" r="4" fill="#407BFF" />
  </svg>
);
