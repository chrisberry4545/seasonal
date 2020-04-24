import { setAllSeasonsWithFoodStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { GO_TO_ALL_SEASONS_GET_DATA } from '../route.actions';

export const getAllSeasonsWithFoodStart$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ALL_SEASONS_GET_DATA),
    mapTo(setAllSeasonsWithFoodStart())
  )
);
