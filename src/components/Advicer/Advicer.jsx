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
  TableTextCss,
} from './Advicer.styled';

export const Advicer = () => {
  return (
    <div>
      <AdvicerCss>
        <WrapCss>
          <TitleCss>Water consumption tracker</TitleCss>
          <TextCss>Record daily water intake and track</TextCss>
        </WrapCss>
        <TableTextCss>Tracker Benefits</TableTextCss>
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

        <NavLinkBtn to={'/signup'}>
          <BtnText>Try tracker</BtnText>
        </NavLinkBtn>
      </AdvicerCss>
    </div>
  );
};
