import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  DIET_TYPE
} from '@chrisb-dev/seasonal-shared-models';
import {
  ISettingsState,
  SET_DIET_TYPE,
  selectSettingsState,
  INIT_APP,
  initSettings,
  SET_REGION,
  GET_COUNTRIES_SUCCESS,
  selectSettingsRegionId,
  selectAllRegions,
  userRegionDetected,
  SET_USER_REGION_DETECTED
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  getNearestRegionFromLatLng
} from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { getCurrentDeviceLocation$ } from '../../helpers';

import { IState } from '../../interfaces';

import {
  map,
  ignoreElements,
  withLatestFrom,
  tap,
  filter,
  debounceTime,
  switchMap,
  catchError
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable, of } from 'rxjs';
import { WebSeasonalEpic } from './seasonal-epic.type';
import { setStoredData, getStoredData } from '../../helpers';

const settingsStorageKey = 'seasonalSettings';

export const storeSettings$: WebSeasonalEpic = (
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

export const getStoredSettings$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    map(() => getStoredData<ISettingsState>(settingsStorageKey)),
    map((settings) => initSettings(
      settings
      ? {
        ...settings,
        timesAppStarted: (settings.timesAppStarted || 0) + 1
      }
      :
      {
        dietType: DIET_TYPE.ALL,
        isListViewShown: false,
        selectedRegionId: undefined,
        timesAppStarted: 1
      })
    )
  )
);

export const detectCountry$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(GET_COUNTRIES_SUCCESS),
    withLatestFrom(state$),
    map(([, state]) => ({
      allRegions: selectAllRegions(state),
      regionId: selectSettingsRegionId(state)
    })),
    filter(({ allRegions, regionId }) =>
      Boolean(!regionId && allRegions)
    ),
    debounceTime(100),
    switchMap(({ allRegions }) => (
      getCurrentDeviceLocation$().pipe(
        map((location) => ({
          allRegions,
          error: null,
          location: {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          }
        })),
        catchError((error) => {
          const firstRegion = allRegions![0];
          return of({
            allRegions,
            error,
            location: {
              lat: firstRegion.latLng.lat,
              lng: firstRegion.latLng.lng
            }
          });
        })
      )
    )),
    map(({ allRegions, error, location }) => ({
      error,
      nearestRegion: getNearestRegionFromLatLng(allRegions, location)
    })),
    map(({ nearestRegion, error }) => userRegionDetected(
      nearestRegion!.id, error
    ))
  )
);
