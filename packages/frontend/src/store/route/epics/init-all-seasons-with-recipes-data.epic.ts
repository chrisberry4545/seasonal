import { INIT_APP, setAllSeasonsWithRecipesStart, SET_DIET_TYPE } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, mapTo, withLatestFrom } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { GO_TO_RECIPES_TABS, selectIsCurrentTabRecipes } from '../../web-ui';
import { selectIsCurrentRouteAllSeasons } from '../route.selectors';
import { LOCATION_CHANGE } from 'connected-react-router';

export const initAllSeasonsWithRecipesData$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      LOCATION_CHANGE,
      INIT_APP,
      GO_TO_RECIPES_TABS,
      SET_DIET_TYPE
    ),
    withLatestFrom(state$),
    map(([, state]) =>
      selectIsCurrentRouteAllSeasons(state)
      && selectIsCurrentTabRecipes(state)
    ),
    filter((isCorrectRoute) => Boolean(isCorrectRoute)),
    mapTo(setAllSeasonsWithRecipesStart())
  )
);
