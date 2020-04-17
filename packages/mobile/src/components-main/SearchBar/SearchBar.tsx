import React, { FC, Fragment } from 'react';

import { ISearchBarProps } from './SearchBar.interface';
import {
  BareButton,
  Input,
  MagnifyingGlassIcon,
  CrossIcon
} from '../../components-elements';
import { View, ViewStyle } from 'react-native';
import { colors } from '../../styles/colors';

const styleSearchBar: ViewStyle = {
  alignItems: 'center',
  backgroundColor: colors.backgroundColor,
  flexDirection: 'row',
  height: 40,
  justifyContent: 'flex-end',
  left: 20,
  marginTop: 19,
  paddingRight: 12,
  position: 'absolute',
  right: 20,
  top: 4
};

const styleSearchBarButton: ViewStyle = {
  display: 'flex',
  flex: 0,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  paddingBottom: 12,
  paddingLeft: 12,
  paddingTop: 12
};

const styleSearchBarCloseButton: ViewStyle = {
  position: 'absolute',
  right: 2,
  top: -15
};

export const SearchBar: FC<ISearchBarProps> = ({
  isSearchBarVisible,
  onHideSearchBar,
  onSearchChanged,
  onShowSearchBar
}) => (
  <Fragment>
    <BareButton
      style={ styleSearchBarButton }
      onClick={onShowSearchBar}>
      <MagnifyingGlassIcon size={ 24 }/>
    </BareButton>
    {
      isSearchBarVisible
       ? <View style={ styleSearchBar }>
          <Input
            autoFocus
            onChangeText={(newSearchTerm) => onSearchChanged(newSearchTerm)}
            placeholder='Search'/>
          <BareButton
            style={ {...styleSearchBarButton, ...styleSearchBarCloseButton} }
            onClick={onHideSearchBar}>
            <CrossIcon size={ 40 } />
          </BareButton>
        </View>
        : null
    }
  </Fragment>
);
