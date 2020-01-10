import React, { FC } from 'react';

import './RecipesForFood.scss';

import { IRecipesForFoodProps } from './RecipesForFood.interface';
import { ImageGrid } from '../../components-layout';
import { TextHeadingSmall } from '../../components-elements';
import { DietaryFiltersConnector } from '../DietaryFilters/DietaryFilters.connector';

export const RecipesForFood: FC<IRecipesForFoodProps> = ({
  isLoading,
  currentFoodDetailsRecipes,
  onRecipeSelected
}) => (
  !isLoading && currentFoodDetailsRecipes && currentFoodDetailsRecipes.length > 0
    ? <div className='c-recipes-for-food'>
      <TextHeadingSmall className='c-recipes-for-food__heading'>
        Recipes
      </TextHeadingSmall>
      <DietaryFiltersConnector />
      <ImageGrid data={currentFoodDetailsRecipes} onClick={onRecipeSelected} />
    </div>
    : null
);
