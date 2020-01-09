import { DIET_TYPE } from '../../enums';

export interface ISettingsState {
  dietType: DIET_TYPE;
  selectedRegionCode: string | undefined;
}
