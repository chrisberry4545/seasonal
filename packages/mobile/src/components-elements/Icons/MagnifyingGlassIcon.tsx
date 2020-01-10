import React, { FC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const MagnifyingGlassIcon: FC<IIcon> = ({
  size,
  color
}) => (
  <IconBase name='ios-search'
    size={size} color={color} />
);
