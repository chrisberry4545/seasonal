import { FOOD_DETAILS_SELECT_SEASON, GO_BACK_FROM_SETTINGS_PAGE, SELECT_SEASON, SET_REGION } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { FOOD_TABLE_URL } from '../../../const';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { GO_BACK_FROM_FOOD_DETAILS } from '../route.actions';

export const goToFoodTable$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_REGION,
      GO_BACK_FROM_SETTINGS_PAGE,
      GO_BACK_FROM_FOOD_DETAILS,
      FOOD_DETAILS_SELECT_SEASON,
      SELECT_SEASON
    ),
    mapTo(push(FOOD_TABLE_URL))
  )
);
