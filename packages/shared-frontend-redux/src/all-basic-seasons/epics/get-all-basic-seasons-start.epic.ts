import { ofType, ActionsObservable } from 'redux-observable';
import {
  setAllSeasonsStart
} from '../all-basic-seasons.actions';
import {
  SET_REGION,
  SET_USER_REGION_DETECTED
} from '../../country';
import {
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import {
  INIT_SETTINGS
} from '../../settings';

export const getAllBasicSeasonsStart$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> =>
  actions$.pipe(
    ofType(
      INIT_SETTINGS,
      SET_REGION,
      SET_USER_REGION_DETECTED
    ),
    mapTo(setAllSeasonsStart())
  );