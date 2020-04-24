import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  setSelectedSeasonName
} from '../current-season-name.actions';
import {
  SELECT_SEASON,
  ISelectSeason
} from '../../ui';

import {
  map,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { selectAllBasicSeasons } from '../../all-basic-seasons';

export const setSeasonSelectedSeasonName$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SELECT_SEASON),
    map((action) => (action as ISelectSeason).seasonIndex),
    withLatestFrom(state$),
    map(([seasonIndex, state]) => {
      const basicSeasons = selectAllBasicSeasons(state);
      return basicSeasons && basicSeasons[seasonIndex];
    }),
    map((selectedSeason) => setSelectedSeasonName(
      selectedSeason && selectedSeason.name || ''
    ))
  )
);
