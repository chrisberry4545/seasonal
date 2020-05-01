import { setAllSeasonsWithRecipesStart, SET_DIET_TYPE } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo, filter } from 'rxjs/operators';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { GO_TO_ALL_SEASONS_GET_DATA } from '../route.actions';
import { getIsCurrentRouteAllSeasons } from '../../../helpers';

export const getAllSeasonsWithRecipesStart$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_TO_ALL_SEASONS_GET_DATA,
      SET_DIET_TYPE
    ),
    filter(({ type }) =>
      type === GO_TO_ALL_SEASONS_GET_DATA
      || getIsCurrentRouteAllSeasons()
    ),
    mapTo(setAllSeasonsWithRecipesStart())
  )
);
