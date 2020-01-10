import React, { FC } from 'react';

import {
  HeaderConnecter,
  SelectLocationConnecter
} from '../../components-main';

import { MainContainer } from '../../components-layout';
import { View, ViewStyle } from 'react-native';
import { SettingsBackButtonConnecter } from '../../components-main/SettingsBackButton/SettingsBackButton.connector';

const styleSettingsPageContent: ViewStyle = {
  marginTop: 16
};

export const SettingsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <View style={styleSettingsPageContent}>
      <SelectLocationConnecter>
        <SettingsBackButtonConnecter />
      </SelectLocationConnecter>
    </View>
  </MainContainer>
);
