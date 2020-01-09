import React, { FC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const ArrowIcon: FC<IIcon> = ({
  size,
  color
}) => (
  <IconBase name='ios-arrow-round-back'
    size={size} color={color} />
);
