import React, { FC } from 'react';
import {
  IHeaderAndBackButtonProps
} from './HeaderAndBackButton.interface';
import {
  BackArrowIconButton,
  TextHeadingMedium
} from '../../components-elements';
import { View, ViewStyle, TextStyle } from 'react-native';
import { sizes } from '../../styles/sizes';

const styleHeaderAndBackButton: ViewStyle = {
  alignItems: 'center',
  display: 'flex',
  flex: 0,
  flexDirection: 'row',
  height: 50,
  marginBottom: 6,
  marginTop: 4
};

const styleHeaderAndBackButtonTitle: TextStyle = {
  flex: 1,
  marginRight: sizes.arrowIcon / 2,
  textAlign: 'center'
};

export const HeaderAndBackButton: FC<IHeaderAndBackButtonProps> = ({
  title,
  onGoBack
}) => (
  <View style={styleHeaderAndBackButton}>
    <BackArrowIconButton onClick={onGoBack} />
    <TextHeadingMedium style={styleHeaderAndBackButtonTitle}>
      {title}
    </TextHeadingMedium>
  </View>
);
