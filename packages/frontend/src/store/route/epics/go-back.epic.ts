import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { GO_BACK_FROM_BADGE_DETAILS } from '../route.actions';
import { goBack } from 'connected-react-router';

export const goBack$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_BACK_FROM_BADGE_DETAILS),
    mapTo(goBack())
  )
);
