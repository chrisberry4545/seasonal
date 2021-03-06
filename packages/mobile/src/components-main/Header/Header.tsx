import React, { FC } from 'react';
import { View, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import {
  styles
} from '../../styles';
import {
  BareButton,
  TextHeadingLarge,
  BurgerIcon
} from '../../components-elements';
import {
  SearchBarConnecter
} from '../SearchBar/SearchBar.connector';
import { IHeaderDispatchProps } from './Header.interface';

const styleHeader: ViewStyle = {
  alignItems: 'center',
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderColor: styles.colors.greyMed,
  flexDirection: 'row',
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 16
};

const styleHeaderMenuButton: ViewStyle = {
  flex: 0,
  paddingTop: 4
};

const styleHeaderHeading: TextStyle = {
  flex: 1,
  textAlign: 'center'
};

export const Header: FC<IHeaderDispatchProps> = ({
  onMenuOpen
}) => {
  return (
    <View style={ styleHeader }>
      <BareButton
        style={ styleHeaderMenuButton }
        onClick={onMenuOpen}>
        <BurgerIcon size={ 32 } />
      </BareButton>
      <TextHeadingLarge style={ styleHeaderHeading }>
        Eat Seasonal
      </TextHeadingLarge>
      <SearchBarConnecter />
    </View>
  );
};
