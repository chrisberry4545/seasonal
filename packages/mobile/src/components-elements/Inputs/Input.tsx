import React, { FC } from 'react';

import { TextInput, TextInputProps, TextStyle } from 'react-native';

const styleInput: TextStyle = {
  padding: 10,
  width: '100%'
};

export const Input: FC<TextInputProps> = ({
  style,
  ...rest
}) => (
  <TextInput {...rest} style={ [ styleInput, style ] } />
);
