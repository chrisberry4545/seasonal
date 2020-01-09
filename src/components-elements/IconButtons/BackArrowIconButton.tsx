import React, { FC } from 'react';
import { IButton } from '../Buttons/Button.interface';
import { BareButton } from '../Buttons';
import { ArrowIcon } from '../Icons';
import { sizes } from '../../styles/sizes';

export const BackArrowIconButton: FC<IButton> = (buttonOptions) => (
  <BareButton {...buttonOptions}>
    <ArrowIcon size={sizes.arrowIcon} />
  </BareButton>
);
