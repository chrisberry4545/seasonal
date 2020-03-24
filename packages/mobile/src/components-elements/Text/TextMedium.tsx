import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { textBase } from './SharedTextStyles';

import {
  IText
} from './Text.interface';

export const styleTextMedium: TextStyle = {
  ...textBase,
  fontSize: 14,
  lineHeight: 14
};

export const TextMedium: FC<IText> = ({
  children,
  style
}) => (
  <Text style={ [styleTextMedium, style] }>
    { children }
  </Text>
);
