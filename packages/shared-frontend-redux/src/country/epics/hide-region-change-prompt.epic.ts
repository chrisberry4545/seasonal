import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { hideRegionChangePrompt } from '../../ui';
import { SET_USER_REGION_DETECTED } from '../country.actions';

export const hideRegionChangePrompt$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_USER_REGION_DETECTED),
    delay(5000),
    mapTo(hideRegionChangePrompt())
  )
);
