import React, { FC } from 'react';
import { ViewStyle } from 'react-native';

import { BareButton } from './BareButton';
import {
  IButton
} from './Button.interface';
import { colors } from '../../styles/colors';

const styleBorderedButton: ViewStyle = {
  borderColor: colors.greyMed,
  borderWidth: 1,
  padding: 10
};

export const BorderedButton: FC<IButton> = ({
  activeOpacity,
  children,
  onClick,
  style
}) => (
  <BareButton
    style={ { ...styleBorderedButton, ...style } }
    onClick={onClick}
    activeOpacity={activeOpacity}>
    { children }
  </BareButton>
);
