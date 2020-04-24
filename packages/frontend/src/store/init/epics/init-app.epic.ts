import {
  initApp
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import {
  Observable
} from 'rxjs';

import {
  mapTo, first, filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';
import { ActionsObservable, ofType } from 'redux-observable';
import { LANDING_URL } from '../../../const';

export const initApp$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(LOCATION_CHANGE),
    filter((action) =>
      (action as LocationChangeAction).payload.location.pathname !== LANDING_URL
    ),
    first(),
    mapTo(initApp())
  )
);
