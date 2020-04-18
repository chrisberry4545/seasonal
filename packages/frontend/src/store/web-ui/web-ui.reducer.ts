import {
  GO_TO_FOOD_TAB,
  GO_TO_RECIPES_TABS
} from './web-ui.actions';
import { IWebUiState } from './web-ui-state.interface';
import { Action } from 'redux';
import { TABS } from '../../const';

const getDefaultState = (): IWebUiState => ({
  currentTab: TABS.FOOD
});

export function webUiReducer(
  state = getDefaultState(),
  action: Action
): IWebUiState {
  switch (action.type) {
    case GO_TO_FOOD_TAB:
      return {
        ...state,
        currentTab: TABS.FOOD
      };
    case GO_TO_RECIPES_TABS:
      return {
        ...state,
        currentTab: TABS.RECIPES
      };
    default:
      return state;
  }
}
