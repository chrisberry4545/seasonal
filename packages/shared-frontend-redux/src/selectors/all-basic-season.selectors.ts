
import { createSelector } from 'reselect';
import { IState, IBaseSeason } from '@chrisb-dev/seasonal-shared-models';

const selectAllBasicSeasonDataState = (
  state: IState
) => state.allBasicSeasonData;

export const selectIsBasicSeasonsLoading = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): boolean => allBasicSeasonData.isLoading
);

export const selectAllBasicSeasons = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): IBaseSeason[] | undefined => allBasicSeasonData.data
);
