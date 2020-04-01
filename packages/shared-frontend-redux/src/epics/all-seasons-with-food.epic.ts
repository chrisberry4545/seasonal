import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasonsWithFood
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  SET_ALL_SEASONS_WITH_FOOD_START,
  setAllSeasonsWithFoodSuccess,
  setError
} from '../actions';

import {
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../interfaces';
import { selectSettingsRegionCode } from '../selectors';

export const getAllSeasonsWithFood$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_FOOD_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsRegionCode(state)),
    switchMap((regionCode) =>
      getAllSeasonsWithFood(regionCode)
        .then((seasonData) => setAllSeasonsWithFoodSuccess(seasonData))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
