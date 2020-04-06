import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';

export interface ISettingsState {
  dietType: DIET_TYPE;
  isListViewShown: boolean;
  selectedRegionId: string | undefined;
  timesAppStarted: number | undefined;
  userId?: string | undefined;
}
