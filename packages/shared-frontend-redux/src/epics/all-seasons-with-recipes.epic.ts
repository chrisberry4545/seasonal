import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasonsWithRecipes
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  SET_ALL_SEASONS_WITH_RECIPES_START,
  setAllSeasonsWithRecipesSuccess,
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
import { IState, IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { selectSettingsRegionCode } from '../selectors';

export const getAllSeasonsWithRecipes$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_RECIPES_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsRegionCode(state)),
    switchMap((regionCode) =>
      getAllSeasonsWithRecipes(regionCode)
        .then((seasonData) => setAllSeasonsWithRecipesSuccess(seasonData))
        .catch((error: IBackendError) => setError(error))
    )
  )
);
