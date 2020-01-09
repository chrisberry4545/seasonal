import { Action } from 'redux';

export const GO_TO_WEB_VERSION = 'GO_TO_WEB_VERSION';
export function goToWebVersion(): Action {
  return {
    type: GO_TO_WEB_VERSION
  };
}

export const GO_BACK_FROM_FOOD_DETAILS = 'GO_BACK_FROM_FOOD_DETAILS';
export function goBackFromFoodDetails(): Action {
  return {
    type: GO_BACK_FROM_FOOD_DETAILS
  };
}
