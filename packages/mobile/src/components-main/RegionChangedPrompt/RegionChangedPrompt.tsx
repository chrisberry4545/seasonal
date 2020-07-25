import React, { FC } from 'react';

import { IRegionChangedPromptProps } from './RegionChangedPrompt.interface';
import { TextLarge, BareButton } from '../../components-elements';
import { ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../styles/colors';
import { Toast } from '../../components-layout';
import i18n from 'i18n-js';

const styleRegionChangedPromptButton: ViewStyle = {
  marginTop: 4
};

const styleRegionChangedPromptText: TextStyle = {
  color: colors.textLight
};

export const RegionChangedPrompt: FC<IRegionChangedPromptProps> = ({
  isVisible,
  currentRegion,
  hideRegionChangedPrompt,
  showRegionSelector
}) => (
  <Toast onClose={hideRegionChangedPrompt} isVisible={Boolean(currentRegion && isVisible)}>
    <TextLarge style={styleRegionChangedPromptText}>
      {i18n.t('regionChangedDetectedYourClosestRegionAs')}
    </TextLarge>
    <TextLarge style={styleRegionChangedPromptText}>
      { currentRegion && currentRegion.name }.
    </TextLarge>
    <BareButton onClick={showRegionSelector} style={styleRegionChangedPromptButton}>
      <TextLarge style={styleRegionChangedPromptText}>
        {i18n.t('regionChangedIfThisIsWrongClickHere')}
      </TextLarge>
    </BareButton>
  </Toast>
);
