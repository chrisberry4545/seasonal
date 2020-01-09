import { Action } from 'redux';
import { IBaseSeason } from '../../interfaces';

export const SET_ALL_BASIC_SEASONS_START =
  'SET_ALL_BASIC_SEASON_START';
export function setAllSeasonsStart(): Action {
  return {
    type: SET_ALL_BASIC_SEASONS_START
  };
}

export interface ISetAllBasicSeasonDataSuccess extends Action {
  seasonData: IBaseSeason[];
}
export const SET_ALL_BASIC_SEASONS_SUCCESS =
  'SET_ALL_BASIC_SEASONS_SUCCESS';
export function setAllBasicSeasonsSuccess(
  seasonData: IBaseSeason[]
): ISetAllBasicSeasonDataSuccess {
  return {
    seasonData,
    type: SET_ALL_BASIC_SEASONS_SUCCESS
  };
}
