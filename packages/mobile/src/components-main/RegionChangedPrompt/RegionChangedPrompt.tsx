import React, { FC } from 'react';

import { IRegionChangedPromptProps } from './RegionChangedPrompt.interface';
import { TextLarge, BareButton, Toast } from '../../components-elements';
import { ViewStyle, TextStyle } from 'react-native';
import { colors } from '../../styles/colors';

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
      We've detected your closest region as:
    </TextLarge>
    <TextLarge style={styleRegionChangedPromptText}>
      { currentRegion && currentRegion.name }.
    </TextLarge>
    <BareButton onClick={showRegionSelector} style={styleRegionChangedPromptButton}>
      <TextLarge style={styleRegionChangedPromptText}>
        If this is wrong, click here.
      </TextLarge>
    </BareButton>
  </Toast>
);
