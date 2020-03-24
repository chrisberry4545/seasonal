import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { headingBase } from './SharedTextStyles';

import {
  IText
} from './Text.interface';

export const styleTextHeadingLarge: TextStyle = {
  ...headingBase,
  fontSize: 30,
  lineHeight: 40
};

export const TextHeadingLarge: FC<IText> = ({
  children,
  style
}) => (
  <Text style={ [styleTextHeadingLarge, style] }>
    { children }
  </Text>
);
