import {
  initApp
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import {
  of,
  Observable
} from 'rxjs';

import {
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const initAppEpic$: AppSeasonalEpic = (): Observable<Action> => (
  of(null).pipe(
    mapTo(initApp())
  )
);
