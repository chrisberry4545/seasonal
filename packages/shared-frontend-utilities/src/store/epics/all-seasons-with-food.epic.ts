import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasonsWithFood
} from '../../services';

import {
  SET_ALL_SEASONS_WITH_FOOD_START,
  setAllSeasonsWithFoodSuccess
} from '../actions';

import {
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { IState } from '@chrisb-dev/seasonal-shared-models';
import { selectSettingsRegionCode } from '../selectors';

export const getAllSeasonsWithFood$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_FOOD_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsRegionCode(state)),
    switchMap((regionCode) => getAllSeasonsWithFood(regionCode)),
    map((seasonData) => setAllSeasonsWithFoodSuccess(seasonData))
  )
);
