import React, { FC } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { ImageGrid } from '../ImageGrid/ImageGrid';
import { ImageList } from '../ImageList/ImageList';
import { BareButton, GridIcon, ListIcon, TextSmall } from '../../components-elements';
import { ISwitchableGridOrListInterface } from './SwitchableGridOrList.interface';

const switchableGridOfListButton: ViewStyle = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: 6,
  marginLeft: 'auto',
  marginRight: 24
};

const switchableGridOfListButtonText: TextStyle = {
  paddingLeft: 4
};

export const SwitchableGridOfList: FC<
  ISwitchableGridOrListInterface
> = ({
  isListViewShown,
  onToggleListView,
  ...props
}) => (
  <View>
    <BareButton
      style={switchableGridOfListButton}
      onClick={onToggleListView}>
      { isListViewShown ? <GridIcon /> : <ListIcon /> }
      <TextSmall style={switchableGridOfListButtonText}>
        { isListViewShown ? 'Grid view' : 'List view' }
      </TextSmall>
    </BareButton>
    {
      isListViewShown
        ? <ImageList {...props } />
        : <ImageGrid {...props} />
    }
  </View>
);
