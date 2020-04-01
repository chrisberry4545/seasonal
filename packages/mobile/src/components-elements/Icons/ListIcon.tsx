import React, { FC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const ListIcon: FC<IIcon> = ({
  size,
  color
}) => (
  <IconBase name='md-list'
    size={size} color={color} />
);
