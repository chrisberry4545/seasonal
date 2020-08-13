import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { SET_REGION, SET_USER_REGION_DETECTED } from '../../country';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { INIT_SETTINGS, SET_DIET_TYPE, SET_LANGUAGE_SUCCESS } from '../../settings';
import { FOOD_DETAILS_SELECT_SEASON, SELECT_SEASON } from '../../ui';
import { setCurrentSeasonWithRecipesStart } from '../current-season.actions';

export const getCurrentSeasonWithRecipesStart$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      INIT_SETTINGS,
      FOOD_DETAILS_SELECT_SEASON,
      SET_DIET_TYPE,
      SET_USER_REGION_DETECTED,
      SET_REGION,
      SET_LANGUAGE_SUCCESS
    ),
    mapTo(setCurrentSeasonWithRecipesStart())
  )
);
