import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  ISettingsState,
  DIET_TYPE
} from '@chrisb-dev/seasonal-shared-models';
import {
  SET_DIET_TYPE,
  selectSettingsState,
  INIT_APP,
  initSettings,
  SET_REGION
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../interfaces';

import {
  map,
  ignoreElements,
  withLatestFrom,
  tap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
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
      SET_REGION
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
        selectedRegionCode: undefined,
        timesAppStarted: 1
      })
    )
  )
);
