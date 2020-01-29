import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import { IConfirmButtonLayout } from './ConfirmButtonLayout.interface';

const styleConfirmButtonLayout: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between'
};

export const ConfirmButtonLayout: FC<IConfirmButtonLayout> = ({
  children,
  style
}) => (
  <View style={{ ...styleConfirmButtonLayout, ...style }}>
    {children}
  </View>
);
