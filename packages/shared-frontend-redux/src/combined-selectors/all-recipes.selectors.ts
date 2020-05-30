import { createSelector } from 'reselect';
import { selectCurrentSeasonRecipes } from '../current-season';
import { selectCurrentFoodDetailsRecipes } from '../current-food-details';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';

export const selectAllRecipes = createSelector(
  selectCurrentSeasonRecipes,
  selectCurrentFoodDetailsRecipes,
  (currentSeasonRecipes, currentFoodRecipes): IRecipe[] => [
    ...currentSeasonRecipes || [],
    ...currentFoodRecipes || []
  ]
);

export const selectRecipeById = (recipeId: string) => (
  createSelector(
    selectAllRecipes,
    (recipes): IRecipe | undefined => recipes && recipes.find(({ id }) => (
      id === recipeId
    ))
  )
);
