import {
  GO_BACK_FROM_SETTINGS_PAGE,
  SET_REGION,
  SET_LANGUAGE_SUCCESS
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { GO_BACK_FROM_FOOD_DETAILS } from '..';
import { navigateBackOne } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { GO_BACK_FROM_BADGE_DETAILS } from '../route.actions';

export const goBack$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_BACK_FROM_BADGE_DETAILS,
      SET_REGION,
      SET_LANGUAGE_SUCCESS,
      GO_BACK_FROM_FOOD_DETAILS,
      GO_BACK_FROM_SETTINGS_PAGE
    ),
    tap(() => navigateBackOne()),
    ignoreElements()
  )
);
