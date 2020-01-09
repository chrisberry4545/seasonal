
import { createSelector } from 'reselect';
import { IState } from '../../interfaces';
import { IBaseSeason } from '../../interfaces';

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
