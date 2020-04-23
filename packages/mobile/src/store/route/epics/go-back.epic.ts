import { GO_BACK_FROM_SETTINGS_PAGE, SET_REGION } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { GO_BACK_FROM_FOOD_DETAILS } from '..';
import { navigateBackOne } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const goBack$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_REGION,
      GO_BACK_FROM_FOOD_DETAILS,
      GO_BACK_FROM_SETTINGS_PAGE
    ),
    tap(() => navigateBackOne()),
    ignoreElements()
  )
);
