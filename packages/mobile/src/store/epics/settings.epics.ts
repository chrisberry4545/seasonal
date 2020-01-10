import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  getNearestRegionFromLatLng,
  SET_DIET_TYPE,
  selectSettingsState,
  INIT_APP,
  initSettings,
  ISettingsState,
  SET_REGION, DIET_TYPE,
  GET_COUNTRIES_SUCCESS,
  selectAllRegions,
  userRegionDetected,
  SET_USER_REGION_DETECTED,
  selectSettingsRegionCode
} from '@chrisb-dev/seasonal-shared';

import { IState } from '../../interfaces';

import {
  map,
  ignoreElements,
  withLatestFrom,
  tap,
  switchMap,
  catchError,
  filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable, of } from 'rxjs';
import { AppSeasonalEpic } from './seasonal-epic.type';
import { setStoredData, getStoredData, getCurrentDeviceLocation$ } from '../../helpers';

const settingsStorageKey = 'seasonalSettings';

export const storeSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_DIET_TYPE,
      SET_REGION,
      SET_USER_REGION_DETECTED
    ),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsState(state)),
    tap((settingsState) => setStoredData(settingsStorageKey, settingsState)),
    ignoreElements()
  )
);

export const getStoredSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    switchMap(() => getStoredData<ISettingsState>(settingsStorageKey)),
    map((settings) => initSettings(settings || {
      dietType: DIET_TYPE.ALL,
      selectedRegionCode: undefined
    }))
  )
);

export const detectCountry$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(GET_COUNTRIES_SUCCESS),
    withLatestFrom(state$),
    map(([, state]) => ({
      allRegions: selectAllRegions(state),
      regionCode: selectSettingsRegionCode(state)
    })),
    filter(({ allRegions, regionCode }) =>
      Boolean(!regionCode && allRegions)
    ),
    switchMap(({ allRegions }) => (
      getCurrentDeviceLocation$().pipe(
        map((location) => ({
          allRegions,
          location: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          }
        })),
        catchError(() => {
          const firstRegion = allRegions![0];
          return of({
            allRegions,
            location: {
              lat: firstRegion.latLng.lat,
              lng: firstRegion.latLng.lng
            }
          });
        })
      )
    )),
    map(({ allRegions, location }) => getNearestRegionFromLatLng(
      allRegions, location
    )),
    map((nearestRegion) => userRegionDetected(nearestRegion!.code))
  )
);
