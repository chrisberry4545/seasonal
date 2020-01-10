import {
  initApp
} from '../actions';

import {
  of,
  Observable
} from 'rxjs';

import {
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { SharedSeasonalEpic } from './seasonal-epic.type';

export const initAppEpic$: SharedSeasonalEpic = (): Observable<Action> => (
  of(null).pipe(
    mapTo(initApp())
  )
);
