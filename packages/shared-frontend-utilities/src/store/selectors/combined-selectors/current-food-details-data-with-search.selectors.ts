
import { createSelector } from 'reselect';
import { selectCurrentSearchTerm } from '../ui.selectors';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { getDataThatContainsSearchTerm } from '../../../helpers';
import { selectCurrentFoodDetailsRecipes } from '../current-food-details.selectors';

export const selectVisibleRecipesForFoodDetailsData = createSelector(
  selectCurrentSearchTerm,
  selectCurrentFoodDetailsRecipes,
  (searchTerm, recipes): IRecipe[] | undefined => getDataThatContainsSearchTerm(
    searchTerm,
    recipes
  )
);
