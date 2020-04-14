import { Action } from 'redux';
import { ICountry } from '@chrisb-dev/seasonal-shared-models';

export const GET_COUNTRIES_START = 'GET_COUNTRIES_START';
export function getCountriesStart(): Action {
  return {
    type: GET_COUNTRIES_START
  };
}

export interface IGetCountriesSuccess extends Action {
  countries: ICountry[];
}
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export function getCountriesSuccess(
  countries: ICountry[]
): IGetCountriesSuccess {
  return {
    countries,
    type: GET_COUNTRIES_SUCCESS
  };
}

export interface ISetRegionAction extends Action {
  regionId: string;
}
export const SET_REGION = 'SET_REGION';
export function setRegion(
  regionId: string
): ISetRegionAction {
  return {
    regionId,
    type: SET_REGION
  };
}

interface ISetUserRegionDetectedAction extends ISetRegionAction {
  error: string | null;
}
export const USER_REGION_DETECTED = 'USER_REGION_DETECTED';
export function userRegionDetected(
  regionId: string,
  error: string | null
): ISetUserRegionDetectedAction {
  return {
    error,
    regionId,
    type: USER_REGION_DETECTED
  };
}

export const SET_USER_REGION_DETECTED = 'SET_USER_REGION_DETECTED';
export function setUserRegionDetected(
  regionId: string
): ISetRegionAction {
  return {
    regionId,
    type: SET_USER_REGION_DETECTED
  };
}
