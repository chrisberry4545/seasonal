
import { createSelector } from 'reselect';
import { selectCurrentSearchTerm } from '../ui';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { getDataThatContainsSearchTerm } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { selectCurrentFoodDetailsRecipes } from '../current-food-details';

export const selectVisibleRecipesForFoodDetailsData = createSelector(
  selectCurrentSearchTerm,
  selectCurrentFoodDetailsRecipes,
  (searchTerm, recipes): IRecipe[] | undefined => getDataThatContainsSearchTerm(
    searchTerm,
    recipes
  )
);
