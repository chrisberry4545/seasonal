import { DIET_TYPE } from '../../enums';

export interface ISettingsState {
  dietType: DIET_TYPE;
  isListViewShown: boolean;
  selectedRegionCode: string | undefined;
  timesAppStarted: number | undefined;
  userId?: string | undefined;
}
