import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';

export const SET_CURRENT_SEASON_WITH_FOOD_START =
  'SET_CURRENT_SEASON_WITH_FOOD_START';
export function setCurrentSeasonWithFoodStart(): Action {
  return {
    type: SET_CURRENT_SEASON_WITH_FOOD_START
  };
}

export interface ISetCurrentSeasonSuccess extends Action {
  currentSeasonData: IHydratedSeason;
}
export const SET_CURRENT_SEASON_WITH_FOOD_SUCCESS =
  'SET_CURRENT_SEASON_WITH_FOOD_SUCCESS';
export function setCurrentSeasonWithFoodSuccess(
  currentSeasonData: IHydratedSeason
): ISetCurrentSeasonSuccess {
  return {
    currentSeasonData,
    type: SET_CURRENT_SEASON_WITH_FOOD_SUCCESS
  };
}

export const SET_CURRENT_SEASON_WITH_RECIPES_START =
  'SET_CURRENT_SEASON_WITH_RECIPES_START';
export function setCurrentSeasonWithRecipesStart(): Action {
  return {
    type: SET_CURRENT_SEASON_WITH_RECIPES_START
  };
}

export const SET_CURRENT_SEASON_WITH_RECIPES_SUCCESS =
  'SET_CURRENT_SEASON_WITH_RECIPES_SUCCESS';
export function setCurrentSeasonWithRecipesSuccess(
  currentSeasonData: IHydratedSeason
): ISetCurrentSeasonSuccess {
  return {
    currentSeasonData,
    type: SET_CURRENT_SEASON_WITH_RECIPES_SUCCESS
  };
}
