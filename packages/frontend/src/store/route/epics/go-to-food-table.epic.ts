import { FOOD_DETAILS_SELECT_SEASON, SELECT_SEASON } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { FOOD_TABLE_URL } from '../../../const';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToFoodTable$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      FOOD_DETAILS_SELECT_SEASON,
      SELECT_SEASON
    ),
    mapTo(push(FOOD_TABLE_URL))
  )
);
