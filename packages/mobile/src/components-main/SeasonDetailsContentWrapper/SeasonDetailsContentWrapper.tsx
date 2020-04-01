import React, { FC, Fragment } from 'react';
import { ScrollView } from 'react-native';
import {
  HeaderConnecter
} from '../Header/Header.connector';

import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';
import {
  MainContainer,
  TopLoadingSpinner,
  SeasonNameView
} from '../../components-layout';

export const SeasonDetailsContentWrapper:
FC<ISeasonDetailsContentWrapperInputProps> = ({
  isLoading,
  currentSeasonName,
  children
}) => (
      <MainContainer>
        <HeaderConnecter />
        <ScrollView>
          <SeasonNameView name={currentSeasonName} />
          {
            !isLoading
              ? <Fragment>{children}</Fragment>
              : <TopLoadingSpinner />
          }
        </ScrollView>
      </MainContainer>
);
