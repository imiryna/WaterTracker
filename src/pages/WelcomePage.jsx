import { Advicer } from 'components/Advicer/Advicer';
import React from 'react';
import { SectionCss, WelcomeWrapCss } from './HomePage.styled';
import { Description } from 'components/Description/Description';

const Welcome = () => {
  return (
    <SectionCss>
      <WelcomeWrapCss>
        <Advicer />
        <Description />
      </WelcomeWrapCss>
    </SectionCss>
  );
};
export default Welcome;
