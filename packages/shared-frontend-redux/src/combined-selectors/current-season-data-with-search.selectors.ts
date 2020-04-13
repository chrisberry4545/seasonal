
import { createSelector } from 'reselect';
import { selectCurrentSearchTerm } from '../ui';
import { selectCurrentSeasonFood, selectCurrentSeasonRecipes } from '../current-season';
import { IFood, IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { getDataThatContainsSearchTerm } from '@chrisb-dev/seasonal-shared-frontend-utilities';

export const selectVisibleFoodData = createSelector(
  selectCurrentSearchTerm,
  selectCurrentSeasonFood,
  (searchTerm, food): IFood[] | undefined => getDataThatContainsSearchTerm(
    searchTerm,
    food
  )
);

export const selectVisibleRecipeData = createSelector(
  selectCurrentSearchTerm,
  selectCurrentSeasonRecipes,
  (searchTerm, recipes): IRecipe[] | undefined => getDataThatContainsSearchTerm(
    searchTerm,
    recipes
  )
);
