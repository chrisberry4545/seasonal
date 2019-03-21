import React, { SFC } from 'react';
import { Text, TextStyle } from 'react-native';
import { headingBase } from './SharedTextStyles';

import {
  ITextInterface
} from './Text.interface';

export const styleTextHeadingLarge: TextStyle = {
  ...headingBase,
  fontSize: 30,
  lineHeight: 40
};

export const TextHeadingLarge: SFC<ITextInterface> = ({
  children,
  style
}) => (
  <Text style={ [styleTextHeadingLarge, style] }>
    { children }
  </Text>
);
