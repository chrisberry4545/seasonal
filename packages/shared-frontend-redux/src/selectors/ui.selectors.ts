import { createSelector } from 'reselect';
import { IState } from '../interfaces';

const selectUiState = (state: IState) => state.ui;

export const selectIsMenuOpen = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isMenuOpen
);

export const selectCurrentSearchTerm = createSelector(
  selectUiState,
  (uiState): string | undefined => uiState.searchTerm &&
    uiState.searchTerm.toLowerCase()
);

export const selectIsSearchBarVisible = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isSearchBarVisible
);

export const selectIsLocationSettingsPopupVisible = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isLocationSettingsPopupVisible
);

export const selectIsRegionChangePromptVisible = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isRegionChangePromptVisible
);
