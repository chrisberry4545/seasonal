import { createSelector } from 'reselect';
import {
  IState,
  DIET_TYPE
} from '@chrisb-dev/seasonal-shared-models';

export const selectSettingsState = (state: IState) => state.settings;

export const selectSettingsDietType = createSelector(
  selectSettingsState,
  (settings): DIET_TYPE => settings.dietType
);

export const selectSettingsRegionCode = createSelector(
  selectSettingsState,
  (settings): string | undefined => settings.selectedRegionCode
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
