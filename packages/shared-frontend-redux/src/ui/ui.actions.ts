import { Action } from 'redux';

export const INIT_APP = 'INIT_APP';
export function initApp(): Action {
  return {
    type: INIT_APP
  };
}

export const OPEN_MENU = 'OPEN_MENU';
export function openMenu(): Action {
  return {
    type: OPEN_MENU
  };
}

export const CLOSE_MENU = 'CLOSE_MENU';
export function closeMenu(): Action {
  return {
    type: CLOSE_MENU
  };
}

export interface ISelectSeason extends Action {
  seasonIndex: number;
}
export const SELECT_SEASON = 'SELECT_SEASON';
export function selectSeason(
  seasonIndex: number
): ISelectSeason {
  return {
    seasonIndex,
    type: SELECT_SEASON
  };
}

export const GO_TO_ALL_SEASONS_VIEW = 'GO_TO_ALL_SEASONS_VIEW';
export function goToAllSeasonsView(): Action {
  return {
    type: GO_TO_ALL_SEASONS_VIEW
  };
}

export const GO_TO_SETTINGS_PAGE = 'GO_TO_SETTINGS_PAGE';
export function goToSettingsPage() {
  return {
    type: GO_TO_SETTINGS_PAGE
  };
}

export const GO_BACK_FROM_SETTINGS_PAGE = 'GO_BACK_FROM_SETTINGS_PAGE';
export function goBackFromSettingsPage() {
  return {
    type: GO_BACK_FROM_SETTINGS_PAGE
  };
}

export const FOOD_DETAILS_SELECT_SEASON = 'FOOD_DETAILS_SELECT_SEASON';
export function foodDetailsSelectSeason(
  seasonIndex: number
): ISelectSeason {
  return {
    seasonIndex,
    type: FOOD_DETAILS_SELECT_SEASON
  };
}

export interface ISearchBarChanged extends Action {
  newSearchTerm: string;
}
export const SEARCH_BAR_CHANGED = 'SEARCH_BAR_CHANGED';
export function searchBarChanged(
  newSearchTerm: string
): ISearchBarChanged {
  return {
    newSearchTerm,
    type: SEARCH_BAR_CHANGED
  };
}

export const SHOW_SEARCH_BAR = 'SHOW_SEARCH_BAR';
export function showSearchBar(): Action {
  return {
    type: SHOW_SEARCH_BAR
  };
}

export const HIDE_SEARCH_BAR = 'HIDE_SEARCH_BAR';
export function hideSearchBar(): Action {
  return {
    type: HIDE_SEARCH_BAR
  };
}

export interface IFoodItemClicked extends Action {
  foodItemId: string;
}
export const FOOD_ITEM_CLICKED = 'FOOD_ITEM_CLICKED';
export function foodItemClicked(
  foodItemId: string
): IFoodItemClicked {
  return {
    foodItemId,
    type: FOOD_ITEM_CLICKED
  };
}

export const BADGE_DETAILS_SELECT_FOOD = 'BADGE_DETAILS_SELECT_FOOD';
export function badgeDetailsSelectFood(
  foodItemId: string
): IFoodItemClicked {
  return {
    foodItemId,
    type: BADGE_DETAILS_SELECT_FOOD
  };
}

export interface IRecipeItemClicked extends Action {
  recipeItemId: string;
}
export const RECIPE_ITEM_CLICKED = 'RECIPE_ITEM_CLICKED';
export function recipeItemClicked(
  recipeItemId: string
): IRecipeItemClicked {
  return {
    recipeItemId,
    type: RECIPE_ITEM_CLICKED
  };
}

export interface IBadgeItemClicked extends Action {
  badgeItemId: string;
}
export const BADGE_ITEM_CLICKED = 'BADGE_ITEM_CLICKED';
export function badgeItemClicked(
  badgeItemId: string
): IBadgeItemClicked {
  return {
    badgeItemId,
    type: BADGE_ITEM_CLICKED
  };
}

export const FOOD_DETAILS_SELECT_RECIPE = 'FOOD_DETAILS_SELECT_RECIPE';
export function foodDetailsSelectRecipe(
  recipeItemId: string
): IRecipeItemClicked {
  return {
    recipeItemId,
    type: FOOD_DETAILS_SELECT_RECIPE
  };
}

export const SHOW_LOCATION_SETTINGS_POPUP = 'SHOW_LOCATION_SETTINGS_POPUP';
export function showLocationPopup() {
  return {
    type: SHOW_LOCATION_SETTINGS_POPUP
  };
}

export const CLOSE_LOCATION_SETTINGS_POPUP = 'CLOSE_LOCATION_SETTINGS_POPUP';
export function closeLocationPopup() {
  return {
    type: CLOSE_LOCATION_SETTINGS_POPUP
  };
}

export const HIDE_REGION_CHANGE_PROMPT = 'HIDE_REGION_CHANGE_PROMPT';
export function hideRegionChangePrompt() {
  return {
    type: HIDE_REGION_CHANGE_PROMPT
  };
}
