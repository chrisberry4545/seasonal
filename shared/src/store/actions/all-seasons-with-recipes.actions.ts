import { Action } from 'redux';
import { IHydratedSeason } from '../../interfaces';

export const SET_ALL_SEASONS_WITH_RECIPES_START =
  'SET_ALL_SEASONS_WITH_RECIPES_START';
export function setAllSeasonsWithRecipesStart(): Action {
  return {
    type: SET_ALL_SEASONS_WITH_RECIPES_START
  };
}

export interface ISetAllSeasonsWithRecipesSuccess extends Action {
  seasonData: IHydratedSeason[];
}
export const SET_ALL_SEASONS_WITH_RECIPES_SUCCESS =
  'SET_ALL_SEASONS_WITH_RECIPES_SUCCESS';
export function setAllSeasonsWithRecipesSuccess(
  seasonData: IHydratedSeason[]
): ISetAllSeasonsWithRecipesSuccess {
  return {
    seasonData,
    type: SET_ALL_SEASONS_WITH_RECIPES_SUCCESS
  };
}
