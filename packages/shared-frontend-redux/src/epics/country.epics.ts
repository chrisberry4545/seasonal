import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  INIT_APP,
  getCountriesStart,
  getCountriesSuccess,
  ISetRegionAction,
  USER_REGION_DETECTED,
  setUserRegionDetected,
  SET_USER_REGION_DETECTED,
  hideRegionChangePrompt
} from '../actions';
import {
  map,
  switchMap,
  mapTo,
  withLatestFrom,
  filter,
  delay
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { getCountries } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IState } from '@chrisb-dev/seasonal-shared-models';
import { selectSettingsRegionCode } from '../selectors';

export const getCountriesStart$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    mapTo(getCountriesStart())
  )
);

export const getCountries$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    switchMap(() => getCountries()),
    map((countries) => getCountriesSuccess(countries))
  )
);

export const promptCountryChangeOnNewDetected$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(USER_REGION_DETECTED),
    withLatestFrom(state$),
    map(([action, state]) => ({
      detectedRegion: (action as ISetRegionAction).regionCode,
      settingsRegionCode: selectSettingsRegionCode(state)
    })),
    filter(({ detectedRegion, settingsRegionCode }) => (
      detectedRegion !== settingsRegionCode
    )),
    map(({ detectedRegion }) => setUserRegionDetected(detectedRegion))
  )
);

export const hideRegionChangePrompt$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_USER_REGION_DETECTED),
    delay(5000),
    mapTo(hideRegionChangePrompt())
  )
);
