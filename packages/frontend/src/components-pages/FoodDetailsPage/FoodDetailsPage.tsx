import React, { FC } from 'react';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  PageWithMenu,
  SeasonsForFoodConnecter,
  RecipesForFoodConnecter,
  FoodBadgesConnecter
} from '../../components-main';
import {
  DetailsPageLayout
} from '../../components-layout';

export const FoodDetailsPage: FC<{}> = () => (
  <PageWithMenu>
    <DetailsPageLayout>
      <FoodDetailsTopSectionConnecter />
      <FoodBadgesConnecter />
      <FoodDetailsLoaderConnecter />
      <RecipesForFoodConnecter />
      <SeasonsForFoodConnecter />
    </DetailsPageLayout>
  </PageWithMenu>
);
