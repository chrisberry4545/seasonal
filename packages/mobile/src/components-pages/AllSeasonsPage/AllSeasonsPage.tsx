import React, { FC } from 'react';
import {
  AllSeasonsConnector,
  HeaderConnecter
} from '../../components-main';
import { MainContainer } from '../../components-layout';

export const AllSeasonsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <AllSeasonsConnector />
  </MainContainer>
);
