
import { createSelector } from 'reselect';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';

const selectAllSeasonsWithFoodState = (
  state: IState
) => state.allSeasons;

export const selectIsAllSeasonsFoodLoading = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasons): boolean => allSeasons.isFoodLoading
);

export const selectIsAllSeasonsRecipesLoading = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasons): boolean => allSeasons.isRecipesLoading
);

export const selectAllSeasons = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasons): IHydratedSeason[] | undefined => (
    allSeasons.data
  )
);

export const selectNumberOfAllSeasonsInView = createSelector(
  selectAllSeasonsWithFoodState,
  (allSeasons): number => (
    allSeasons.numberOfSeasonsInView
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
