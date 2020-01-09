import { createSelector } from 'reselect';
import {
  selectIsCurrentFoodDetailsLoading,
  selectCurrentFoodDetailsSeasons
} from '../current-food-details.selectors';
import {
  selectIsBasicSeasonsLoading,
  selectAllBasicSeasons
} from '../all-basic-season.selectors';
import { ISelectableItem } from '../../../interfaces';

export const selectIsFoodDataOrBasicSeasonsLoading = createSelector(
  selectIsCurrentFoodDetailsLoading,
  selectIsBasicSeasonsLoading,
  (isCurrentFoodDetailsLoading, isBasicSeasonDataLoading): boolean => (
    isCurrentFoodDetailsLoading || isBasicSeasonDataLoading
  )
);

export const selectSeasonsSelectedForFood = createSelector(
  selectCurrentFoodDetailsSeasons,
  selectAllBasicSeasons,
  (foodDetailsSeasons, basicSeasons): ISelectableItem[] | undefined => (
    foodDetailsSeasons && basicSeasons &&
      basicSeasons.map(({ id, name }) => ({
        isSelected: foodDetailsSeasons
          .some((foodDetailSeason) => foodDetailSeason.id === id),
        name
      }))
));
