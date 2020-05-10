
import React from 'react';
import { ViewStyle, View } from 'react-native';
import { FC } from 'react';

const styleDefaultPaddingContainer: ViewStyle = {
  paddingLeft: 24,
  paddingRight: 24
};

export const DefaultPaddingContainer: FC<{
  style?: ViewStyle
}> = ({
  children,
  style
}) => (
  <View style={ [styleDefaultPaddingContainer, ...(style ? [style] : [])] }>
    { children }
  </View>
);
