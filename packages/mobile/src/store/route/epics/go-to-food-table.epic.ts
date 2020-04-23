import { FOOD_DETAILS_SELECT_SEASON, SELECT_SEASON } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { ROUTES } from '../../../const';
import { navigate } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const goToFoodTable$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      FOOD_DETAILS_SELECT_SEASON
    ),
    tap(() => navigate(ROUTES.SEASON_DETAILS)),
    ignoreElements()
  )
);
