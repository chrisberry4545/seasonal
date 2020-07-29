import { GO_TO_SETTINGS_PAGE } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { setLanguagesStart } from '../language.actions';

export const getLanguagesStart$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_SETTINGS_PAGE),
    mapTo(setLanguagesStart())
  )
);
