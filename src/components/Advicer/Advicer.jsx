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
    </div>
  );
};
