import { ActionsObservable, ofType } from 'redux-observable';
import {
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import {
  GO_TO_WEB_VERSION
} from '../route.actions';
import { push } from 'connected-react-router';
import { FOOD_TABLE_URL } from '../../../const';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToWebVersion$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_WEB_VERSION),
    mapTo(push(FOOD_TABLE_URL))
  )
);
