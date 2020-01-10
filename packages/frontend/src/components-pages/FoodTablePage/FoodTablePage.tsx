import React, { FC } from 'react';

import './FoodTablePage.scss';

import {
  BottomTabsConnecter,
  CurrentSeasonNameConnecter,
  FoodTableConnecter,
  PageWithMenu,
  RecipeTableConnecter
} from '../../components-main';

export const FoodTablePage: FC<{}> = () => (
  <PageWithMenu>
    <div className='c-food-table-page__main'>
      <CurrentSeasonNameConnecter />
      <FoodTableConnecter />
      <RecipeTableConnecter />
      <BottomTabsConnecter />
    </div>
  </PageWithMenu>
);
