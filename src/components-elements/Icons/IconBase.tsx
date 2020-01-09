import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';

export const IconBase: FC<{
  name: string,
  size?: number,
  color?: string
}> = ({
  name,
  size,
  color
}) => (
  <Ionicons name={name} size={size} color={color} />
);
