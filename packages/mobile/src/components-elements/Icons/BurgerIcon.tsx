import React, { FC } from 'react';
import { IIcon } from './icon.interface';
import { IconBase } from './IconBase';

export const BurgerIcon: FC<IIcon> = ({
  size,
  color
}) => (
  <IconBase name='ios-menu'
    size={size} color={color} />
);
