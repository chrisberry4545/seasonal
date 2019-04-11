
import { createSelector } from 'reselect';
import { IState, IHydratedSeason } from '../../interfaces';

const selectAllSeasonsWithFoodDataState = (
  state: IState
) => state.allSeasonsWithFoodData;

export const selectIsAllSeasonsWithFoodDataLoading = createSelector(
  selectAllSeasonsWithFoodDataState,
  (allSeasonsWithFoodData): boolean => allSeasonsWithFoodData.isLoading
);

export const selectAllSeasonsWithFoodData = createSelector(
  selectAllSeasonsWithFoodDataState,
  (allSeasonsWithFoodData): IHydratedSeason[] | undefined => (
    allSeasonsWithFoodData.data
  )
);
