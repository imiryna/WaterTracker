import React from 'react';
import {
  WrapContentCss,
  ContainerCss,
  TextCss,
  TableCss,
} from './Description.styled';

export const Discription = () => {
  return (
    <>
      <ContainerCss>
        <TableCss>Why drink water</TableCss>
        <WrapContentCss>
          <Drop />
          <TextCss>Supply of nutrients to all organs</TextCss>
        </WrapContentCss>
        <WrapContentCss>
          <Drop />
          <TextCss>Providing oxygen to the lungs</TextCss>
        </WrapContentCss>
        <WrapContentCss>
          <Drop />
          <TextCss>Maintaining the work of the heart</TextCss>
        </WrapContentCss>
        <WrapContentCss>
          <Drop />
          <TextCss>Release of processed substances</TextCss>
        </WrapContentCss>
        <WrapContentCss>
          <Drop />
          <TextCss>Ensuring the stability of the internal environment</TextCss>
        </WrapContentCss>
        <WrapContentCss>
          <Drop />
          <TextCss>Maintaining within the normal temperature</TextCss>
        </WrapContentCss>
        <WrapContentCss>
          <Drop />
          <TextCss>
            Maintaining an immune system capable of resisting disease
          </TextCss>
        </WrapContentCss>
      </ContainerCss>
    </>
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
