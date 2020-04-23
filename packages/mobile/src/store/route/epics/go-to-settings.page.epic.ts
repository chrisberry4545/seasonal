import { GO_TO_SETTINGS_PAGE } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { ROUTES } from '../../../const';
import { navigate } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const goToSettingsPage$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_SETTINGS_PAGE),
    tap(() => navigate(ROUTES.SETTINGS)),
    ignoreElements()
  )
);
