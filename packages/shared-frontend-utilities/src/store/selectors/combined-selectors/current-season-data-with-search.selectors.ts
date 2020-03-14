
import { createSelector } from 'reselect';
import { selectCurrentSearchTerm } from '../ui.selectors';
import { selectCurrentSeasonFood, selectCurrentSeasonRecipes } from '../current-season.selectors';
import { IFood, IRecipe } from '@chrisb-dev/seasonal-shared-models';
import { getDataThatContainsSearchTerm } from '../../../helpers';

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
