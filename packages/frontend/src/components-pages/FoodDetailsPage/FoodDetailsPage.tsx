import React, { FC } from 'react';

import './FoodDetailsPage.scss';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  PageWithMenu,
  SeasonsForFoodConnecter,
  RecipesForFoodConnecter,
  FoodBadgesConnecter
} from '../../components-main';

export const FoodDetailsPage: FC<{}> = () => (
  <PageWithMenu>
    <div className='c-food-details-page__main'>
      <FoodDetailsTopSectionConnecter />
      <FoodBadgesConnecter />
      <FoodDetailsLoaderConnecter />
      <RecipesForFoodConnecter />
      <SeasonsForFoodConnecter />
    </div>
  </PageWithMenu>
);
