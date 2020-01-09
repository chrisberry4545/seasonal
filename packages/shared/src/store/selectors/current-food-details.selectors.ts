import { createSelector } from 'reselect';
import {
  IState, ICurrentFoodDetailsDataState, IRecipe
} from '../../interfaces';
import {
  IHydratedFood,
  IBaseSeason
} from '../../interfaces';

const selectCurrentFoodDetailsState = (
  state: IState
): ICurrentFoodDetailsDataState => state.currentFoodDetailsData;

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
