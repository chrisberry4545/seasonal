import { createSelector } from 'reselect';
import { IState } from '../../interfaces';
import { TABS } from '../../const';

const selectWebUiState = (state: IState) => state.webUi;

export const selectCurrentTab = createSelector(
  selectWebUiState,
  (webUiState): TABS => webUiState.currentTab
);

export const selectIsCurrentTabFood = createSelector(
  selectCurrentTab,
  (currentTab): boolean => currentTab === TABS.FOOD
);

export const selectIsCurrentTabRecipes = createSelector(
  selectCurrentTab,
  (currentTab): boolean => currentTab === TABS.RECIPES
);
