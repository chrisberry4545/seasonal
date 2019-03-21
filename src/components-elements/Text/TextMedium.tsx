import React, { SFC } from 'react';
import { Text, TextStyle } from 'react-native';
import { textBase } from './SharedTextStyles';

import {
  ITextInterface
} from './Text.interface';

export const styleTextMedium: TextStyle = {
  ...textBase,
  fontSize: 14,
  lineHeight: 14
};

export const TextMedium: SFC<ITextInterface> = ({
  children,
  style
}) => (
  <Text style={ [styleTextMedium, style] }>
    { children }
  </Text>
);
