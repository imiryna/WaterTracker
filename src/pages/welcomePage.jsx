import { Advicer } from 'components/Advicer/advicer';
import React from 'react';
import { SectionCss } from 'components/Advicer/advicer.styled';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';

const Welcome = () => {
  return (
    <SectionCss>
      <Advicer />
      <ProgressBar/>
    </SectionCss>
  );
};
export default Welcome;
