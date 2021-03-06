import { GO_TO_SETTINGS_PAGE, SHOW_LOCATION_SETTINGS_POPUP } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { SETTINGS_URL } from '../../../const';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToSettingsPage$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_TO_SETTINGS_PAGE,
      SHOW_LOCATION_SETTINGS_POPUP
    ),
    mapTo(push(SETTINGS_URL))
  )
);
