import React, { FC } from 'react';

import {
  HeaderConnecter,
  SelectLocationConnecter,
  SettingsBackButtonConnecter
} from '../../components-main';

import { MainContainer, DefaultPaddingContainer } from '../../components-layout';
import { View, ViewStyle } from 'react-native';

const styleSettingsPageContent: ViewStyle = {
  marginTop: 16
};

export const SettingsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <DefaultPaddingContainer>
      <View style={styleSettingsPageContent}>
        <SelectLocationConnecter>
          <SettingsBackButtonConnecter />
        </SelectLocationConnecter>
      </View>
    </DefaultPaddingContainer>
  </MainContainer>
);
