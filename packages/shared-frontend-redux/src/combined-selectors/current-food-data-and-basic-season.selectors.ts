import { createSelector } from 'reselect';
import {
  selectIsCurrentFoodDetailsLoading,
  selectCurrentFoodDetailsSeasons
} from '../current-food-details';
import {
  selectIsBasicSeasonsLoading,
  selectAllBasicSeasons
} from '../all-basic-seasons';
import { ISelectableItem } from '@chrisb-dev/seasonal-shared-models';

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
