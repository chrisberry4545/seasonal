import { GO_TO_ALL_SEASONS_VIEW } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { ALL_SEASONS_URL } from '../../../const';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToAllSeasonsView$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ALL_SEASONS_VIEW),
    mapTo(push(ALL_SEASONS_URL))
  )
);
