import { ISettingsState } from '../../interfaces';
import { Action } from 'redux';
import {
  SET_DIET_TYPE,
  ISetDietType,
  INIT_SETTINGS,
  IInitSettings,
  SET_REGION,
  ISetRegionAction,
  SET_USER_REGION_DETECTED
} from '../actions';
import { DIET_TYPE } from '../../enums';
import uuidv4 from 'uuid/v4';

const getDefaultState = (): ISettingsState => ({
  dietType: DIET_TYPE.ALL,
  selectedRegionCode: undefined,
  timesAppStarted: 0,
  userId: undefined
});

export function settingsReducer(
  state: ISettingsState = getDefaultState(),
  action: Action
) {
  switch (action.type) {
    case INIT_SETTINGS:
      const initialSettings = (action as IInitSettings).settings;
      return {
        ...state,
        ...initialSettings,
        userId: initialSettings.userId || uuidv4()
      };
    case SET_DIET_TYPE:
      return {
        ...state,
        dietType: (action as ISetDietType).dietType
      };
    case SET_USER_REGION_DETECTED:
    case SET_REGION:
      return {
        ...state,
        selectedRegionCode: (action as ISetRegionAction).regionCode
      };
    default:
      return state;
  }
}
