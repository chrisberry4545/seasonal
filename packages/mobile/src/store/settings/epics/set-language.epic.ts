import {
  ISetLanguage,
  SET_LANGUAGE,
  INIT_SETTINGS,
  selectSettingsLanguage
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { tap, withLatestFrom, map, ignoreElements } from 'rxjs/operators';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { initLocalization } from '../../../helpers/init-localization';

export const setLanguage$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_SETTINGS, SET_LANGUAGE),
    withLatestFrom(state$),
    map(([action, state]) =>
      (action as ISetLanguage).language || selectSettingsLanguage(state)
    ),
    tap((language) => {
      if (language) {
        initLocalization(language);
      }
    }),
    ignoreElements()
  )
);
