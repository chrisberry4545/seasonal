import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { headingBase } from './SharedTextStyles';

import {
  IText
} from './Text.interface';

export const styleTextHeadingSmall: TextStyle = {
  ...headingBase,
  fontSize: 18,
  lineHeight: 20
};

export const TextHeadingSmall: FC<IText> = ({
  children,
  style
}) => (
  <Text style={ [styleTextHeadingSmall, style] }>
    { children }
  </Text>
);
