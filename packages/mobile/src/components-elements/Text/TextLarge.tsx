import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { textBase } from './SharedTextStyles';

import {
  IText
} from './Text.interface';

export const styleTextLarge: TextStyle = {
  ...textBase,
  fontSize: 16,
  lineHeight: 20
};

export const TextLarge: FC<IText> = ({
  children,
  style
}) => (
  <Text style={ [styleTextLarge, style] }>
    { children }
  </Text>
);
