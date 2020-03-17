
import { createSelector } from 'reselect';
import { IState, IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

const selectAllSeasonsWithFoodState = (
  state: IState
) => state.allSeasonsWithFoodData;

export const selectIsAllSeasonsFoodLoading = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasonsWithFoodData): boolean => allSeasonsWithFoodData.isFoodLoading
);

export const selectIsAllSeasonsRecipesLoading = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasonsWithFoodData): boolean => allSeasonsWithFoodData.isRecipesLoading
);

export const selectAllSeasons = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasonsWithFoodData): IHydratedSeason[] | undefined => (
    allSeasonsWithFoodData.data
  )
);

export const selectNumberOfAllSeasonsInView = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasonsWithFoodData): number => (
    allSeasonsWithFoodData.numberOfSeasonsInView
  )
);

export const selectHasMoreSeasonsInAllSeasonsView = createSelector(
  selectNumberOfAllSeasonsInView,
  selectAllSeasons,
  (numberOfAllSeasons, allSeasons): boolean => (
    allSeasons
      ? numberOfAllSeasons < allSeasons.length
      : false
  )
);
