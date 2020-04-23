import { INIT_SETTINGS, selectSettingsUserId } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, ignoreElements, map, tap, withLatestFrom } from 'rxjs/operators';
import { setTrackingUser } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';

export const initTrackingUser$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_SETTINGS),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsUserId(state)),
    filter((userId) => userId !== undefined),
    tap((userId) => setTrackingUser(userId!)),
    ignoreElements()
  )
);
