import { Action } from 'redux';

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
