import { CLOSE_MENU, SELECT_SEASON } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { GO_TO_ABOUT_US_PAGE } from '..';
import { closeDrawer } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const closeMenu$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_TO_ABOUT_US_PAGE,
      SELECT_SEASON,
      CLOSE_MENU
    ),
    tap(() => closeDrawer()),
    ignoreElements()
  )
);
