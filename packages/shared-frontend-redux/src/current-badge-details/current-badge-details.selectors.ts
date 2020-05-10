import { createSelector } from 'reselect';
import {
  IHydratedBadge,
  IFood
} from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';
import {
  ICurrentBadgeDetailsState
} from './current-badge-details-state.interface';

const selectCurrentBadgeDetailsState = (
  state: IState
): ICurrentBadgeDetailsState => state.currentBadgeDetailsData;

export const selectIsCurrentBadgeDetailsLoading = createSelector(
  selectCurrentBadgeDetailsState,
  (currentBadgeDetails): boolean => currentBadgeDetails.isLoading
);

export const selectCurrentBadgeDetails = createSelector(
  selectCurrentBadgeDetailsState,
  (currentBadgeDetails): IHydratedBadge | undefined => currentBadgeDetails.data
);

export const selectCurrentBadgeDetailsId = createSelector(
  selectCurrentBadgeDetails,
  (currentBadgeDetails): string | undefined => currentBadgeDetails &&
    currentBadgeDetails.id
);

export const selectCurrentBadgeDetailsName = createSelector(
  selectCurrentBadgeDetails,
  (currentBadgeDetails): string | undefined => currentBadgeDetails &&
    currentBadgeDetails.name
);

export const selectCurrentBadgeDetailsFood = createSelector(
  selectCurrentBadgeDetails,
  (currentBadgeDetails): IFood[] | undefined => currentBadgeDetails &&
    currentBadgeDetails.food
);
