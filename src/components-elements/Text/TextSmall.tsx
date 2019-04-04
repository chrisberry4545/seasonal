import React, { SFC } from 'react';
import { Text, TextStyle } from 'react-native';
import { textBase } from './SharedTextStyles';

import {
  ITextInterface
} from './Text.interface';

export const styleTextSmall: TextStyle = {
  ...textBase,
  fontSize: 10,
  lineHeight: 12
};

export const TextSmall: SFC<ITextInterface> = ({
  children,
  style
}) => (
  <Text style={ [styleTextSmall, style] }>
    { children }
  </Text>
);
