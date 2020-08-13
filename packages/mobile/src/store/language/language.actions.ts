import { Action } from 'redux';
import { ILanguagesResponse } from '@chrisb-dev/seasonal-shared-models';

export const SET_LANGUAGES_START = 'SET_LANGUAGES_START';
export function setLanguagesStart(): Action {
  return {
    type: SET_LANGUAGES_START
  };
}

export interface ISetLanguagesSuccess extends Action {
  response: ILanguagesResponse;
}
export const SET_LANGUAGES_SUCCESS = 'SET_LANGUAGES_SUCCESS';
export function setLanguagesSuccess(
  response: ILanguagesResponse
): ISetLanguagesSuccess {
  return {
    response,
    type: SET_LANGUAGES_SUCCESS
  };
}
