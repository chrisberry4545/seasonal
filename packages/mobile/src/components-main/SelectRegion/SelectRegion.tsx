import React, { FC, Fragment } from 'react';

import { ISelectRegionProps } from './SelectRegion.interface';
import { TextHeadingMedium, GroupedSelectBox } from '../../components-elements';
import { ViewStyle, View } from 'react-native';
import { sizes } from '../../styles/sizes';
import i18n from 'i18n-js';

const styleSelectRegionHeader: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  marginBottom: sizes.defaultHeadingMarginBottom
};

export const SelectRegion: FC<ISelectRegionProps> = ({
  countrySelectGroups,
  onRegionSelected,
  children
}) => (
  <Fragment>
    <View style={styleSelectRegionHeader}>
      {children}
      <TextHeadingMedium>
        {i18n.t('selectYourRegion')}
      </TextHeadingMedium>
    </View>
    <GroupedSelectBox groups={countrySelectGroups} onSelected={onRegionSelected} />
  </Fragment>
);
