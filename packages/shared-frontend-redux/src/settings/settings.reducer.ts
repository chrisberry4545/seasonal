import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';
import { ISettingsState } from './settings-state.interface';
import { Action } from 'redux';
import {
  SET_DIET_TYPE,
  ISetDietType,
  INIT_SETTINGS,
  IInitSettings,
  TOGGLE_LIST_VIEW,
  SET_LANGUAGE,
  ISetLanguage
} from './settings.actions';
import {
  SET_REGION,
  ISetRegionAction,
  SET_USER_REGION_DETECTED
} from '../country/country.actions';
import { v4 } from 'uuid';

const getDefaultState = (): ISettingsState => ({
  dietType: DIET_TYPE.ALL,
  isListViewShown: true,
  selectedRegionId: undefined,
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
        selectedRegionId: (action as ISetRegionAction).regionId
      };
    case TOGGLE_LIST_VIEW:
      return {
        ...state,
        isListViewShown: !state.isListViewShown
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: (action as ISetLanguage).language
      };
    default:
      return state;
  }
}
