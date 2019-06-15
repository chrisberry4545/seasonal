import { IHydratedFood } from '../../interfaces';
import { Action } from 'redux';

export interface ISetCurrentFoodDetailsStart extends Action {
  foodItemId?: string;
}
export const SET_CURRENT_FOOD_DETAILS_START =
  'SET_CURRENT_FOOD_DETAILS_START';
export function setCurrentFoodDetailsStart(
  foodItemId?: string
): ISetCurrentFoodDetailsStart {
  return {
    foodItemId,
    type: SET_CURRENT_FOOD_DETAILS_START
  };
}

export interface ISetCurrentFoodDetailsSuccess extends Action {
  currentFoodDetailsData: IHydratedFood;
}
export const SET_CURRENT_FOOD_DETAILS_SUCCESS =
  'SET_CURRENT_FOOD_DETAILS_SUCCESS';
export function setCurrentFoodDetailsSuccess(
  currentFoodData: IHydratedFood
): ISetCurrentFoodDetailsSuccess {
  return {
    currentFoodDetailsData: currentFoodData,
    type: SET_CURRENT_FOOD_DETAILS_SUCCESS
  };
}
