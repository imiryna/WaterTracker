import { ReactComponent as CupIcon } from 'Images/Icons/cup.svg';
import { ReactComponent as EditIcon } from 'Images/Icons/edit.svg';
import { ReactComponent as DeleteIcon } from 'Images/Icons/delete.svg';
import { ReactComponent as PlusIcon } from 'Images/Icons/plus.svg';
import { ReactComponent as MinusIcon } from 'Images/Icons/minus.svg';
import { ReactComponent as CloseIcon } from 'Images/Icons/close.svg';

import styled from 'styled-components';

export const CupSvg = styled(CupIcon)`
  fill: var(--primery-blue);
  width: 36px;
  height: 36px;
`;

export const EditSvg = styled(EditIcon)`
  stroke: var(--secondary-color-4);
  width: 16px;
  height: 16px;
`;

export const DeleteSvg = styled(DeleteIcon)`
  stroke: var(--secondary-color-3);
  width: 16px;
  height: 16px;
`;

export const PlusSvg = styled(PlusIcon)`
  stroke: var(--primery-blue);
  fill: var(--primery-blue);
  color: var(--primery-blue);
  width: 24px;
  height: 24px;
`;

export const MinusSvg = styled(MinusIcon)`
  stroke: var(--primery-blue);
  width: 24px;
  height: 24px;
`;

export const CloseSvg = styled(CloseIcon)`
  stroke: var(--primery-blue);
  width: 24px;
  height: 24px;
`;
