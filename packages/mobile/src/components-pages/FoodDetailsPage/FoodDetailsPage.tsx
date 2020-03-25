import React, { FC } from 'react';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  HeaderConnecter,
  RecipesForFoodConnecter
} from '../../components-main';

import { MainContainer, DefaultPaddingContainer } from '../../components-layout';
import { ScrollView } from 'react-native-gesture-handler';

export const FoodDetailsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <DefaultPaddingContainer>
      <ScrollView>
        <FoodDetailsLoaderConnecter />
        <FoodDetailsTopSectionConnecter />
        <RecipesForFoodConnecter />
        <SeasonsForFoodConnecter />
      </ScrollView>
    </DefaultPaddingContainer>
  </MainContainer>
);
