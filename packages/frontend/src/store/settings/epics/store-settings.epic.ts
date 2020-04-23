import { selectSettingsState, SET_DIET_TYPE, SET_REGION, SET_USER_REGION_DETECTED } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, map, tap, withLatestFrom } from 'rxjs/operators';
import { setStoredData } from '../../../helpers';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { settingsStorageKey } from './settings-storage-key';

export const storeSettings$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_DIET_TYPE,
      SET_REGION,
      SET_USER_REGION_DETECTED
    ),
    withLatestFrom(state$),
    map(([, state]) => selectSettingsState(state)),
    tap((settingsState) => setStoredData(settingsStorageKey, settingsState)),
    ignoreElements()
  )
);
