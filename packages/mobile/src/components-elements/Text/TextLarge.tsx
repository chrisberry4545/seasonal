import React, { FC } from 'react';
import { Text, TextStyle } from 'react-native';
import { textBase } from './SharedTextStyles';

import {
  ITextInterface
} from './Text.interface';

export const styleTextLarge: TextStyle = {
  ...textBase,
  fontSize: 16,
  lineHeight: 20
};

export const TextLarge: FC<ITextInterface> = ({
  children,
  style
}) => (
  <Text style={ [styleTextLarge, style] }>
    { children }
  </Text>
);
