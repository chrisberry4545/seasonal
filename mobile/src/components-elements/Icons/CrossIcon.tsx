import React, { FC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const CrossIcon: FC<IIcon> = ({
  size,
  color
}) => (
  <IconBase name='ios-close' size={size}
    color={color} />
);
