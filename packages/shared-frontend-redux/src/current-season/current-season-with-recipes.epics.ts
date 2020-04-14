import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonWithRecipes
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  INIT_SETTINGS,
  SET_DIET_TYPE
} from '../settings';
import {
  setError
} from '../error';
import {
  SET_REGION,
  SET_USER_REGION_DETECTED
} from '../country';
import {
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON
} from '../ui';

import {
  map,
  switchMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../seasonal-epic.type';
import { DIET_TYPE, IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';
import {
  setCurrentSeasonWithRecipesStart,
  SET_CURRENT_SEASON_WITH_RECIPES_START,
  setCurrentSeasonWithRecipesSuccess
} from './current-season.actions';
import {
  selectCurrentSeasonIndex
} from './current-season.selectors';
import {
  selectSettingsDietType,
  selectSettingsRegionId
 } from '../settings';

export const getCurrentSeasonWithRecipesStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      INIT_SETTINGS,
      FOOD_DETAILS_SELECT_SEASON,
      SET_DIET_TYPE,
      SET_USER_REGION_DETECTED,
      SET_REGION
    ),
    mapTo(setCurrentSeasonWithRecipesStart())
  )
);

export const getCurrentSeasonWithRecipesEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_WITH_RECIPES_START),
    withLatestFrom(state$),
    map(([, state]) => ({
      dietType: selectSettingsDietType(state),
      regionId: selectSettingsRegionId(state),
      seasonIndex: selectCurrentSeasonIndex(state)
    })),
    switchMap(({ seasonIndex, regionId, dietType }) => (
      getSeasonWithRecipes(
        seasonIndex,
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionId
      )
        .then((recipesData) => setCurrentSeasonWithRecipesSuccess(recipesData))
        .catch((error: IBackendError) => setError(error))
    ))
  )
);
