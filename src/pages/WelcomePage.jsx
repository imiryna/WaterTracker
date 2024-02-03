import { Advicer } from 'components/Advicer/Advicer';
import React from 'react';
import { SectionCss, WelcomeWrapCss } from 'components/Advicer/Advicer.styled';
import { Discription } from 'components/Description/Description';

const Welcome = () => {
  return (
    <SectionCss>
      <WelcomeWrapCss>
        <Advicer />
        <Discription />
      </WelcomeWrapCss>
    </SectionCss>
  );
};
export default Welcome;
