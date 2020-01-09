import React, { FC } from 'react';

import {
  BackArrowIconButton
} from '../../components-elements';

import {
  ISettingsBackButtonDispatchProps
} from './SettingsBackButton.interface';
import { ViewStyle } from 'react-native';

const styleSettingsBackButton: ViewStyle = {
  marginRight: 12,
  marginTop: 1
};

export const SettingsBackButton: FC<ISettingsBackButtonDispatchProps> = ({
  onGoBack
}) => (
  <BackArrowIconButton style={styleSettingsBackButton} onClick={onGoBack} />
);
