import { Action } from 'redux';

export const GO_TO_FOOD_TAB = 'GO_TO_FOOD_TAB';
export function goToFoodTab(): Action {
  return {
    type: GO_TO_FOOD_TAB
  };
}

export const GO_TO_RECIPES_TABS = 'GO_TO_RECIPES_TABS';
export function goToRecipesTab(): Action {
  return {
    type: GO_TO_RECIPES_TABS
  };
}
