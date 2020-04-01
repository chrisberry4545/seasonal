import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonWithFood
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  SET_CURRENT_SEASON_WITH_FOOD_START,
  setCurrentSeasonWithFoodSuccess,
  INIT_SETTINGS,
  FOOD_DETAILS_SELECT_SEASON,
  setCurrentSeasonWithFoodStart,
  SELECT_SEASON,
  SET_REGION,
  SET_USER_REGION_DETECTED,
  setError
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
import { IState, IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { selectCurrentSeasonIndex, selectSettingsRegionCode } from '../selectors';

export const getCurrentSeasonWithFoodStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      INIT_SETTINGS,
      FOOD_DETAILS_SELECT_SEASON,
      SET_USER_REGION_DETECTED,
      SET_REGION
    ),
    mapTo(setCurrentSeasonWithFoodStart())
  )
);

export const getCurrentSeasonWithFoodEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_WITH_FOOD_START),
    withLatestFrom(state$),
    map(([, state]) => ({
      regionCode: selectSettingsRegionCode(state),
      seasonIndex: selectCurrentSeasonIndex(state)
    })),
    switchMap(({regionCode, seasonIndex}) => (
      getSeasonWithFood(seasonIndex, regionCode))
        .then((foodData) => setCurrentSeasonWithFoodSuccess(foodData))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
