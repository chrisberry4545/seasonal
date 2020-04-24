import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { INIT_APP } from '../../ui';
import { getCountriesStart } from '../country.actions';

export const getCountriesStart$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    mapTo(getCountriesStart())
  )
);
