import React, { FC } from 'react';
import {
  AllSeasonsConnector,
  HeaderConnecter
} from '../../components-main';
import { MainContainer } from '../../components-layout';
import { ScrollView } from 'react-native';

export const AllSeasonsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <ScrollView>
      <AllSeasonsConnector />
    </ScrollView>
  </MainContainer>
);
