import React, { FC } from 'react';
import { ActivityIndicator, ViewStyle } from 'react-native';

export const LoadingSpinner: FC<{
  size?: 'small' | 'large',
  style?: ViewStyle
}> = ({
  size = 'large',
  style
} = {}) => (
  <ActivityIndicator size={size} style={style} />
);
