import { createSelector } from 'reselect';
import { selectCurrentSearchTerm } from '../ui';
import { IFood } from '@chrisb-dev/seasonal-shared-models';
import { getDataThatContainsSearchTerm } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { selectCurrentBadgeDetailsFood } from '../current-badge-details';

export const selectVisibleFoodForBadgeDetailsData = createSelector(
  selectCurrentSearchTerm,
  selectCurrentBadgeDetailsFood,
  (searchTerm, food): IFood[] | undefined => getDataThatContainsSearchTerm(
    searchTerm,
    food
  )
);
