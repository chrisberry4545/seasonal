import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonWithRecipes
} from '../../services';

import {
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON,
  setCurrentSeasonWithRecipesStart,
  SET_CURRENT_SEASON_WITH_RECIPES_START,
  setCurrentSeasonWithRecipesSuccess,
  INIT_SETTINGS,
  SET_DIET_TYPE,
  SET_REGION,
  SET_USER_REGION_DETECTED
} from '../actions';

import {
  map,
  switchMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { IState } from '../../interfaces';
import { selectCurrentSeasonIndex, selectSettingsDietType, selectSettingsRegionCode } from '../selectors';
import { DIET_TYPE } from '../../enums';

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
      regionCode: selectSettingsRegionCode(state),
      seasonIndex: selectCurrentSeasonIndex(state)
    })),
    switchMap(({ seasonIndex, regionCode, dietType }) => (
      getSeasonWithRecipes(
        seasonIndex,
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionCode
      )
    )),
    map((recipesData) => setCurrentSeasonWithRecipesSuccess(recipesData))
  )
);
