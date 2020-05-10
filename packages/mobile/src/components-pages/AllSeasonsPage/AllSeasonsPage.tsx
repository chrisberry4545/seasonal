import React, { FC } from 'react';
import {
  AllSeasonsFoodConnector,
  AllSeasonsRecipesConnector
} from '../../components-main';
import { FoodAndRecipeTabs } from '../../components-layout';

export const AllSeasonsPage: FC<{}> = () =>
  <FoodAndRecipeTabs
    foodScreen={AllSeasonsFoodConnector}
    recipeScreen={AllSeasonsRecipesConnector} />;
