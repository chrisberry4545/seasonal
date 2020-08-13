import { Action } from 'redux';
import { DIET_TYPE, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { ISettingsState } from './settings-state.interface';

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

export const TOGGLE_LIST_VIEW = 'TOGGLE_LIST_VIEW';
export function toggleListView(): Action {
  return {
    type: TOGGLE_LIST_VIEW
  };
}

export interface ISetLanguage extends Action {
  language: LANGUAGES;
}
export const SET_LANGUAGE = 'SET_LANGUAGE';
export function setLanguage(
  language: LANGUAGES
): ISetLanguage {
  return {
    language,
    type: SET_LANGUAGE
  };
}

export const SET_LANGUAGE_SUCCESS = 'SET_LANGUAGE_SUCCESS';
export function setLanguageSuccess(): Action {
  return {
    type: SET_LANGUAGE_SUCCESS
  };
}
