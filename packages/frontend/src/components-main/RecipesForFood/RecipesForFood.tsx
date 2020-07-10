import React, { FC } from 'react';

import './RecipesForFood.scss';

import { IRecipesForFoodProps } from './RecipesForFood.interface';
import { ImageGrid } from '../../components-layout';
import {
  TextHeadingSmall
} from '@chrisb-dev/seasonal-shared-frontend-components';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';
import i18n from 'i18n-js';

export const RecipesForFood: FC<IRecipesForFoodProps> = ({
  isLoading,
  currentFoodDetailsRecipes,
  onRecipeSelected
}) => (
  !isLoading
    ? <div className='c-recipes-for-food'>
      <TextHeadingSmall className='c-recipes-for-food__heading'>
        {i18n.t('recipesForFoodTitle')}
      </TextHeadingSmall>
      <DietaryFiltersConnector />
      <ImageGrid data-e2e='recipes-for-food-grid'
        data={currentFoodDetailsRecipes} onClick={onRecipeSelected} />
    </div>
    : null
);
