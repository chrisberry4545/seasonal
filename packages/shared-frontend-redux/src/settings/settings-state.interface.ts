import { DIET_TYPE, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';

export interface ISettingsState {
  dietType: DIET_TYPE;
  isListViewShown: boolean;
  language?: LANGUAGES;
  selectedRegionId: string | undefined;
  timesAppStarted: number | undefined;
  userId?: string | undefined;
}
