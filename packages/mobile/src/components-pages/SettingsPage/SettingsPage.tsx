import React, { FC } from 'react';

import {
  HeaderConnecter,
  SelectLocationConnecter,
  SettingsBackButtonConnecter
} from '../../components-main';

import { MainContainer, DefaultPaddingContainer } from '../../components-layout';
import { View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styleSettingsPageContent: ViewStyle = {
  marginBottom: 48,
  marginTop: 16
};

export const SettingsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <ScrollView>
      <DefaultPaddingContainer>
        <View style={styleSettingsPageContent}>
          <SelectLocationConnecter>
            <SettingsBackButtonConnecter />
          </SelectLocationConnecter>
        </View>
      </DefaultPaddingContainer>
    </ScrollView>
  </MainContainer>
);
