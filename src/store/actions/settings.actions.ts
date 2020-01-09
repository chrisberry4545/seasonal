import { Action } from 'redux';
import { DIET_TYPE } from '../../enums';
import { ISettingsState } from '../../interfaces';

export interface IInitSettings extends Action {
  settings: ISettingsState;
}
export const INIT_SETTINGS = 'INIT_SETTINGS';
export function initSettings(
  settings: ISettingsState
): IInitSettings {
  return {
    settings,
    type: INIT_SETTINGS
  };
}

export interface ISetDietType extends Action {
  dietType: DIET_TYPE;
}
export const SET_DIET_TYPE = 'SET_DIET_TYPE';
export function setDietType(
  dietType: DIET_TYPE
): ISetDietType {
  return {
    dietType,
    type: SET_DIET_TYPE
  };
}
