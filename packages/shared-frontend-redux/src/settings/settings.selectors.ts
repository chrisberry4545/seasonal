import { createSelector } from 'reselect';
import {
  DIET_TYPE, LANGUAGES
} from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';

export const selectSettingsState = (state: IState) => state.settings;

export const selectSettingsDietType = createSelector(
  selectSettingsState,
  (settings): DIET_TYPE => settings.dietType
);

export const selectSettingsRegionId = createSelector(
  selectSettingsState,
  (settings): string | undefined => settings.selectedRegionId
);

export const selectSettingsUserId = createSelector(
  selectSettingsState,
  (settings): string | undefined => settings.userId
);

export const selectSettingsTimesAppStarted = createSelector(
  selectSettingsState,
  (settings): number | undefined => settings.timesAppStarted
);

export const selectIsListViewShown = createSelector(
  selectSettingsState,
  (settings): boolean => settings.isListViewShown
);

export const selectSettingsLanguage = createSelector(
  selectSettingsState,
  (settings): LANGUAGES | undefined => settings.language
);
