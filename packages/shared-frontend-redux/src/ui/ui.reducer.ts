import {
  CLOSE_MENU,
  OPEN_MENU,
  SELECT_SEASON,
  SEARCH_BAR_CHANGED,
  ISearchBarChanged,
  SHOW_SEARCH_BAR,
  HIDE_SEARCH_BAR,
  GO_TO_ALL_SEASONS_VIEW,
  SHOW_LOCATION_SETTINGS_POPUP,
  CLOSE_LOCATION_SETTINGS_POPUP,
  HIDE_REGION_CHANGE_PROMPT
} from './ui.actions';
import {
  SET_REGION,
  SET_USER_REGION_DETECTED
} from '../country/country.actions';
import { IUiState } from './ui-state.interface';
import { Action } from 'redux';

const getDefaultState = (): IUiState => ({
  isLocationSettingsPopupVisible: false,
  isMenuOpen: false,
  isRegionChangePromptVisible: false,
  isSearchBarVisible: false
});

export function uiReducer(
  state = getDefaultState(),
  action: Action
): IUiState {
  switch (action.type) {
    case GO_TO_ALL_SEASONS_VIEW:
    case SELECT_SEASON:
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false
      };
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true
      };
    case SEARCH_BAR_CHANGED:
      return {
        ...state,
        searchTerm: (action as ISearchBarChanged).newSearchTerm
      };
    case SHOW_SEARCH_BAR:
      return {
        ...state,
        isSearchBarVisible: true
      };
    case HIDE_SEARCH_BAR:
      return {
        ...state,
        isSearchBarVisible: false,
        searchTerm: ''
      };
    case SET_USER_REGION_DETECTED:
      return {
        ...state,
        isRegionChangePromptVisible: true
      };
    case SET_REGION:
    case HIDE_REGION_CHANGE_PROMPT:
      return {
        ...state,
        isRegionChangePromptVisible: false
      };
    case SHOW_LOCATION_SETTINGS_POPUP:
      return {
        ...state,
        isLocationSettingsPopupVisible: true
      };
    case CLOSE_LOCATION_SETTINGS_POPUP:
      return {
        ...state,
        isLocationSettingsPopupVisible: false
      };
    default:
      return state;
  }
}
