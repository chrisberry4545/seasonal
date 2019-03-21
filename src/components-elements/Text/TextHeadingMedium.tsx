import React, { SFC } from 'react';
import { Text, TextStyle } from 'react-native';
import { headingBase } from './SharedTextStyles';

import {
  ITextInterface
} from './Text.interface';

export const styleTextHeadingMedium: TextStyle = {
  ...headingBase,
  fontSize: 20,
  lineHeight: 40
};

export const TextHeadingMedium: SFC<ITextInterface> = ({
  children,
  style
}) => (
  <Text style={ [styleTextHeadingMedium, style] }>
    { children }
  </Text>
);
