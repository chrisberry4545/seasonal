import React, { FC } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { ImageGrid } from '../ImageGrid/ImageGrid';
import { ImageList } from '../ImageList/ImageList';
import { BareButton, GridIcon, ListIcon, TextSmall } from '../../components-elements';
import { ISwitchableGridOrListInterface } from './SwitchableGridOrList.interface';
import i18n from 'i18n-js';

const switchableGridOrListButton: ViewStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 6,
  marginLeft: 'auto',
  marginRight: 24
};

const switchableGridOrListButtonText: TextStyle = {
  paddingLeft: 4
};

export const SwitchableGridOrList: FC<
  ISwitchableGridOrListInterface
> = ({
  isListViewShown,
  onToggleListView,
  ...props
}) => (
  <View>
    <BareButton
      style={switchableGridOrListButton}
      onClick={onToggleListView}>
      { isListViewShown ? <GridIcon /> : <ListIcon /> }
      <TextSmall style={switchableGridOrListButtonText}>
        { isListViewShown ? i18n.t('gridView') : i18n.t('listView') }
      </TextSmall>
    </BareButton>
    {
      isListViewShown
        ? <ImageList {...props } />
        : <ImageGrid {...props} />
    }
  </View>
);
