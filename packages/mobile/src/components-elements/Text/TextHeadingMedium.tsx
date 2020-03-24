import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { headingBase } from './SharedTextStyles';

import {
  IText
} from './Text.interface';

export const styleTextHeadingMedium: TextStyle = {
  ...headingBase,
  fontSize: 20,
  lineHeight: 40
};

export const TextHeadingMedium: FC<IText> = ({
  children,
  style
}) => (
  <Text style={ [styleTextHeadingMedium, style] }>
    { children }
  </Text>
);
