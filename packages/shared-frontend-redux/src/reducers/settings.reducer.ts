import { DIET_TYPE, ISettingsState } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import {
  SET_DIET_TYPE,
  ISetDietType,
  INIT_SETTINGS,
  IInitSettings,
  SET_REGION,
  ISetRegionAction,
  SET_USER_REGION_DETECTED,
  TOGGLE_LIST_VIEW
} from '../actions';
import { v4 } from 'uuid';

const getDefaultState = (): ISettingsState => ({
  dietType: DIET_TYPE.ALL,
  isListViewShown: true,
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
        userId: initialSettings.userId || v4()
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
    case TOGGLE_LIST_VIEW:
      return {
        ...state,
        isListViewShown: !state.isListViewShown
      };
    default:
      return state;
  }
}
