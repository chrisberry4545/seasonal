import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasons
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  SET_ALL_BASIC_SEASONS_START,
  setAllSeasonsStart,
  setAllBasicSeasonsSuccess
} from './all-basic-seasons.actions';
import {
  SET_REGION,
  SET_USER_REGION_DETECTED
} from '../country';
import {
  setError
} from '../error';

import {
  map,
  switchMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { SharedSeasonalEpic } from '../seasonal-epic.type';
import { IState } from '../state.interface';
import {
  INIT_SETTINGS,
  selectSettingsRegionId
} from '../settings';

export const getAllBasicSeasonsStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> =>
  actions$.pipe(
    ofType(
      INIT_SETTINGS,
      SET_REGION,
      SET_USER_REGION_DETECTED
    ),
    mapTo(setAllSeasonsStart())
  );

export const getAllBasicSeasonsEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> =>
  actions$.pipe(
    ofType(SET_ALL_BASIC_SEASONS_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsRegionId(state)),
    switchMap((regionId) =>
      getAllSeasons(regionId)
        .then((seasonData) => setAllBasicSeasonsSuccess(seasonData))
        .catch((error: IBackendError) => setError(error))
    )
  );
