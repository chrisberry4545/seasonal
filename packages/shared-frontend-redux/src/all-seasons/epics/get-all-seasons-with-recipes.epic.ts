import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasonsWithRecipes
} from '@chrisb-dev/seasonal-shared-frontend-utilities';
import {
  SET_ALL_SEASONS_WITH_RECIPES_START,
  setAllSeasonsWithRecipesSuccess
} from '../all-seasons.actions';
import {
  setError
} from '../../error';

import {
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../../state.interface';
import { selectSettingsRegionId } from '../../settings';

export const getAllSeasonsWithRecipes$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> =>
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_RECIPES_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsRegionId(state)),
    switchMap((regionId) =>
      getAllSeasonsWithRecipes(regionId)
        .then((seasonData) => setAllSeasonsWithRecipesSuccess(seasonData))
        .catch((error: IBackendError) => setError(error))
    )
  );
