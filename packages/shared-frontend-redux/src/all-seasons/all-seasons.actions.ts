import { Action } from 'redux';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';

export const SET_ALL_SEASONS_WITH_FOOD_START =
  'SET_ALL_SEASONS_WITH_FOOD_START';
export function setAllSeasonsWithFoodStart(): Action {
  return {
    type: SET_ALL_SEASONS_WITH_FOOD_START
  };
}

export interface ISetAllSeasonsSuccess extends Action {
  seasonData: IHydratedSeason[];
}
export const SET_ALL_SEASONS_WITH_FOOD_SUCCESS =
  'SET_ALL_SEASONS_WITH_FOOD_SUCCESS';
export function setAllSeasonsWithFoodSuccess(
  seasonData: IHydratedSeason[]
): ISetAllSeasonsSuccess {
  return {
    seasonData,
    type: SET_ALL_SEASONS_WITH_FOOD_SUCCESS
  };
}

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

export const INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW =
  'INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW';
export function increaseNumberOfAllFoodSeasonsInView(): Action {
  return {
    type: INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW
  };
}
