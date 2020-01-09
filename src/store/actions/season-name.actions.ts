import { Action } from 'redux';

export interface ISetSelectedSeasonName extends Action {
  seasonName: string;
}
export const SET_SELECTED_SEASON_NAME =
  'SET_SELECTED_SEASON_NAME';
export function setSelectedSeasonName(
  seasonName: string
): ISetSelectedSeasonName {
  return {
    seasonName,
    type: SET_SELECTED_SEASON_NAME
  };
}
