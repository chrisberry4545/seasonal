import { createSelector } from 'reselect';
import {
  IHydratedSeason,
  IFood,
  IRecipe
} from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';

const selectCurrentSeasonWithFoodState = (state: IState) => state.currentSeasonData;

export const selectIsCurrentSeasonFoodLoading = createSelector(
  selectCurrentSeasonWithFoodState,
  (currentSeasonData): boolean => currentSeasonData.isFoodLoading
);

export const selectIsCurrentSeasonRecipesLoading = createSelector(
  selectCurrentSeasonWithFoodState,
  (currentSeasonData): boolean => currentSeasonData.isRecipesLoading
);

export const selectCurrentSeason = createSelector(
  selectCurrentSeasonWithFoodState,
  (currentSeasonData): IHydratedSeason | undefined => currentSeasonData.data
);

export const selectCurrentSeasonFood = createSelector(
  selectCurrentSeason,
  (currentSeason): IFood[] | undefined => currentSeason && currentSeason.food
);

export const selectCurrentSeasonRecipes = createSelector(
  selectCurrentSeason,
  (currentSeason): IRecipe[] | undefined => currentSeason &&
    currentSeason.recipes
);

export const selectDoesCurrentSeasonHaveRecipes = createSelector(
  selectCurrentSeasonRecipes,
  (recipes): boolean => Boolean(recipes && recipes.length > 0)
);

export const selectCurrentSeasonRecipesById = (recipeId: string) => (
  createSelector(
    selectCurrentSeasonRecipes,
    (recipes): IRecipe | undefined => recipes && recipes.find(({ id }) => (
      id === recipeId
    ))
  )
);

export const selectCurrentSeasonIndex = createSelector(
  selectCurrentSeasonWithFoodState,
  (currentSeasonData) => currentSeasonData.currentSeasonIndex
);

export const selectCurrentSeasonName = createSelector(
  selectCurrentSeason,
  (currentSeason): string | undefined => currentSeason && currentSeason.name
);
