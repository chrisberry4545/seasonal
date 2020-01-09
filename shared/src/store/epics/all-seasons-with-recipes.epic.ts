import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getAllSeasonsWithRecipes
} from '../../services';

import {
  SET_ALL_SEASONS_WITH_RECIPES_START,
  setAllSeasonsWithRecipesSuccess
} from '../actions';

import {
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { IState } from '../../interfaces';
import { selectSettingsRegionCode } from '../selectors';

export const getAllSeasonsWithRecipes$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_RECIPES_START),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsRegionCode(state)),
    switchMap((regionCode) => getAllSeasonsWithRecipes(regionCode)),
    map((seasonData) => setAllSeasonsWithRecipesSuccess(seasonData))
  )
);
