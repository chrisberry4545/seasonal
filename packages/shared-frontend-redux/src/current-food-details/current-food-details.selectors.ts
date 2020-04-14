import { createSelector } from 'reselect';
import {
  IHydratedFood,
  IBaseSeason,
  IRecipe
} from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';
import {
  ICurrentFoodDetailsState
} from './current-food-details-state.interface';

const selectCurrentFoodDetailsState = (
  state: IState
): ICurrentFoodDetailsState => state.currentFoodDetailsData;

export const selectIsCurrentFoodDetailsLoading = createSelector(
  selectCurrentFoodDetailsState,
  (currentFoodDetails): boolean => currentFoodDetails.isLoading
);

export const selectCurrentFoodDetails = createSelector(
  selectCurrentFoodDetailsState,
  (currentFoodDetails): IHydratedFood | undefined => currentFoodDetails.data
);

export const selectCurrentFoodDetailsId = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): string | undefined => currentFoodDetails &&
    currentFoodDetails.id
);

export const selectCurrentFoodDetailsName = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): string | undefined => currentFoodDetails &&
    currentFoodDetails.name
);

export const selectCurrentFoodDetailsImageUrl = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): string | undefined => currentFoodDetails &&
    currentFoodDetails.imageUrlSmall
);

export const selectCurrentFoodDetailsSeasons = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): IBaseSeason[] | undefined => currentFoodDetails &&
    currentFoodDetails.seasons
);

export const selectCurrentFoodDetailsRecipes = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): IRecipe[] | undefined => currentFoodDetails &&
    [
      ...(currentFoodDetails.primaryFoodInRecipe || []),
      ...(currentFoodDetails.secondaryFoodInRecipe || [])
    ]
);
