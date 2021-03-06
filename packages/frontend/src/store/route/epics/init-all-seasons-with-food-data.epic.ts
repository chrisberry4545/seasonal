import { INIT_APP, setAllSeasonsWithFoodStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, mapTo, withLatestFrom } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { GO_TO_FOOD_TAB, selectIsCurrentTabFood } from '../../web-ui';
import { selectIsCurrentRouteAllSeasons } from '../route.selectors';
import { LOCATION_CHANGE } from 'connected-react-router';

export const initAllSeasonsWithFoodData$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      INIT_APP,
      LOCATION_CHANGE,
      GO_TO_FOOD_TAB
    ),
    withLatestFrom(state$),
    map(([, state]) =>
      selectIsCurrentRouteAllSeasons(state)
      && selectIsCurrentTabFood(state)
    ),
    filter((isCorrectRoute) => Boolean(isCorrectRoute)),
    mapTo(setAllSeasonsWithFoodStart())
  )
);
