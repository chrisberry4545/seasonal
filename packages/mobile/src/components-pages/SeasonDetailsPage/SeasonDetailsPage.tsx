import React, { FC } from 'react';
import {
  FoodAndRecipeTabs
} from '../../components-layout';
import { SeasonFoodConnector, SeasonRecipesConnector } from '../../components-main';

export const SeasonDetailsPage: FC<{}> = () =>
  <FoodAndRecipeTabs
    foodScreen={SeasonFoodConnector}
    recipeScreen={SeasonRecipesConnector} />;
