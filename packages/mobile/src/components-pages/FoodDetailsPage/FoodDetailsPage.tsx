import React, { FC } from 'react';
import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  HeaderConnecter,
  RecipesForFoodConnecter,
  FoodBadgesConnecter
} from '../../components-main';
import { MainContainer, DetailsPageLayout } from '../../components-layout';

export const FoodDetailsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <DetailsPageLayout>
      <FoodDetailsLoaderConnecter />
      <FoodDetailsTopSectionConnecter />
      <FoodBadgesConnecter />
      <RecipesForFoodConnecter />
      <SeasonsForFoodConnecter />
    </DetailsPageLayout>
  </MainContainer>
);
