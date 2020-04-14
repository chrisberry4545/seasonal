import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonWithFood
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  SET_CURRENT_SEASON_WITH_FOOD_START,
  setCurrentSeasonWithFoodSuccess,
  setCurrentSeasonWithFoodStart
} from './current-season.actions';
import {
  selectCurrentSeasonIndex
} from './current-season.selectors';
import {
  INIT_SETTINGS,
  selectSettingsRegionId
} from '../settings';
import {
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON
} from '../ui';
import {
  setError
} from '../error';
import {
  SET_REGION,
  SET_USER_REGION_DETECTED
} from '../country';

import {
  map,
  switchMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../seasonal-epic.type';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';

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
      regionId: selectSettingsRegionId(state),
      seasonIndex: selectCurrentSeasonIndex(state)
    })),
    switchMap(({regionId, seasonIndex}) => (
      getSeasonWithFood(seasonIndex, regionId))
        .then((foodData) => setCurrentSeasonWithFoodSuccess(foodData))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
