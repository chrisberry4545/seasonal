import React, { FC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const GridIcon: FC<IIcon> = ({
  size,
  color
}) => (
  <IconBase name='md-grid'
    size={size} color={color} />
);
