import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  INIT_APP,
  getCountriesStart,
  getCountriesSuccess,
  ISetRegionAction,
  USER_REGION_DETECTED,
  setUserRegionDetected,
  SET_USER_REGION_DETECTED,
  hideRegionChangePrompt,
  setError
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
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../interfaces';
import { selectSettingsRegionId } from '../selectors';

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
    switchMap(() =>
      getCountries()
        .then((countries) => getCountriesSuccess(countries))
        .catch((error: IBackendError) => setError(error))
    )
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
      detectedRegion: (action as ISetRegionAction).regionId,
      settingsRegionId: selectSettingsRegionId(state)
    })),
    filter(({ detectedRegion, settingsRegionId }) => (
      detectedRegion !== settingsRegionId
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
