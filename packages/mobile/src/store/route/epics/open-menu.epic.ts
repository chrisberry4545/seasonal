import { OPEN_MENU } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, tap } from 'rxjs/operators';
import { openDrawer } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const openMenu$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(OPEN_MENU),
    tap(() => openDrawer()),
    ignoreElements()
  )
);
