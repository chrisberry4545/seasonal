import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { navigate } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { GO_BACK_FROM_BADGE_DETAILS } from '../route.actions';
import { ROUTES } from '../../../const';

export const goBackToFoodDetails$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_BACK_FROM_BADGE_DETAILS),
    tap(() => navigate(ROUTES.FOOD_DETAILS)),
    ignoreElements()
  )
);
