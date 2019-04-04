import React, { SFC } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  IButton
} from './Button.interface';

export const BareButton: SFC<IButton> = ({
  activeOpacity,
  children,
  onClick,
  style
}) => (
  <TouchableOpacity
    style={ style }
    onPress={onClick}
    activeOpacity={activeOpacity}>
    { children }
  </TouchableOpacity>
);
