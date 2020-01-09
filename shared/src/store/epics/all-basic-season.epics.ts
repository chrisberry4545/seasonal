import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasons
} from '../../services';

import {
  INIT_SETTINGS,
  SET_ALL_BASIC_SEASONS_START,
  setAllSeasonsStart,
  setAllBasicSeasonsSuccess,
  SET_REGION,
  SET_USER_REGION_DETECTED
} from '../actions';

import {
  map,
  switchMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { IState } from '../../interfaces';
import { selectSettingsRegionCode } from '../selectors';

export const getAllBasicSeasonsStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      INIT_SETTINGS,
      SET_REGION,
      SET_USER_REGION_DETECTED
    ),
    mapTo(setAllSeasonsStart())
  )
);

export const getAllBasicSeasonsEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_BASIC_SEASONS_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsRegionCode(state)),
    switchMap((regionCode) => getAllSeasons(regionCode)),
    map((seasonData) => setAllBasicSeasonsSuccess(seasonData))
  )
);
