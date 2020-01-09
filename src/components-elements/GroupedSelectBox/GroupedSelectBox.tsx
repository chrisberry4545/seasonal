import React, { FC, Fragment } from 'react';
import { IGroupedSelectOptions } from '@chrisb-dev/seasonal-shared';
import { TextStyle, View, ViewStyle } from 'react-native';
import { TextLarge } from '../Text';
import { colors } from '../../styles/colors';
import { SelectBox } from '../SelectBox/SelectBox';

const styleGroupedSelectOptionGroup: ViewStyle = {
  paddingBottom: 12
};

const styleGroupedSelectOptionGroupName: TextStyle = {
  borderBottomWidth: 1,
  borderColor: colors.greyLight,
  marginBottom: 8,
  padding: 10,
  paddingLeft: 0
};

const styleGroupedSelectOptionSelectWrapper: ViewStyle = {
  paddingLeft: 8
};

export const GroupedSelectBox: FC<{
  groups: IGroupedSelectOptions[] | undefined,
  onSelected?: (selectedValue: string) => void
}> = ({
  groups,
  onSelected
}) => (
  <Fragment>
  {
    groups && groups.map((group) => (
      <View style={styleGroupedSelectOptionGroup} key={group.groupName}>
        <View style={styleGroupedSelectOptionGroupName}>
          <TextLarge>{group.groupName}</TextLarge>
        </View>
        <View style={styleGroupedSelectOptionSelectWrapper}>
          <SelectBox options={group.selectOptions} onSelected={onSelected} />
        </View>
      </View>
    ))
  }
  </Fragment>
);
