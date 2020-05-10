import React, { FC } from 'react';
import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  SeasonsForFoodConnecter,
  HeaderConnecter,
  RecipesForFoodConnecter,
  FoodBadgesConnecter
} from '../../components-main';
import { MainContainer, DetailsPageLayout, DefaultPaddingContainer } from '../../components-layout';

export const FoodDetailsPage: FC<{}> = () => (
  <MainContainer>
    <HeaderConnecter />
    <DetailsPageLayout>
      <FoodDetailsTopSectionConnecter />
      <FoodDetailsLoaderConnecter />
      <DefaultPaddingContainer>
        <FoodBadgesConnecter />
        <RecipesForFoodConnecter />
        <SeasonsForFoodConnecter />
      </DefaultPaddingContainer>
    </DetailsPageLayout>
  </MainContainer>
);
