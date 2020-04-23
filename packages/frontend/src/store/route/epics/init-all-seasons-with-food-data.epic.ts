import { GO_TO_ALL_SEASONS_VIEW, INIT_APP, setAllSeasonsWithFoodStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { debounceTime, filter, map, mapTo, withLatestFrom } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { GO_TO_FOOD_TAB, selectIsCurrentTabFood } from '../../web-ui';
import { GO_BACK_FROM_FOOD_DETAILS } from '../route.actions';
import { selectIsCurrentRouteAllSeasons } from '../route.selectors';

export const initAllSeasonsWithFoodData$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_TO_ALL_SEASONS_VIEW,
      INIT_APP,
      GO_BACK_FROM_FOOD_DETAILS,
      GO_TO_FOOD_TAB
    ),
    debounceTime(50),
    withLatestFrom(state$),
    map(([, state]) =>
      selectIsCurrentRouteAllSeasons(state)
      && selectIsCurrentTabFood(state)
    ),
    filter((isCorrectRoute) => Boolean(isCorrectRoute)),
    mapTo(setAllSeasonsWithFoodStart())
  )
);
