import React from 'react';
import {
  styles
} from '../../styles';
import { ViewStyle, View } from 'react-native';
import { FC } from 'react';

const styleMainContainer: ViewStyle = {
  backgroundColor: styles.colors.backgroundColor,
  flex: 1,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10
};

export const MainContainer: FC<{}> = ({
  children
}) => (
  <View style={ styleMainContainer }>
    { children }
  </View>
);
