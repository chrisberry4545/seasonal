import React, { FC } from 'react';

import { TextInputProps, TextStyle } from 'react-native';
import { Input } from './Input';
import { colors } from '../../styles/colors';

const styleMultilineInput: TextStyle = {
  borderColor: colors.greyMed,
  borderWidth: 1,
  minHeight: 100,
  textAlignVertical: 'top'
};

export const MultilineInput: FC<TextInputProps> = ({
  style,
  ...rest
}) => (
  <Input {...rest} multiline={true} style={ [styleMultilineInput, style ] } />
);
