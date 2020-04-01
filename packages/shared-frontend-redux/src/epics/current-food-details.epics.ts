import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getFoodDetailsData
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  setCurrentFoodDetailsSuccess,
  IFoodItemClicked,
  SET_CURRENT_FOOD_DETAILS_START,
  SET_DIET_TYPE,
  setCurrentFoodDetailsOnDietChange,
  SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE,
  setError
} from '../actions';

import {
  map,
  switchMap,
  withLatestFrom,
  filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import {
  IBackendError,
  DIET_TYPE
} from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../interfaces';
import { selectSettingsDietType, selectCurrentFoodDetailsId, selectSettingsRegionCode } from '../selectors';

export const updateFoodDetailsOnDietTypeChangeEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_DIET_TYPE),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentFoodDetailsId(state)),
    filter((currentFoodDetailsId) => Boolean(currentFoodDetailsId)),
    map((currentFoodDetailsId) => (
      setCurrentFoodDetailsOnDietChange(currentFoodDetailsId))
    )
  )
);

export const getCurrentFoodDetailsEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_CURRENT_FOOD_DETAILS_START,
      SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE
    ),
    withLatestFrom(state$),
    map(([action, state]: [Action, IState]) => ({
      dietType: selectSettingsDietType(state),
      foodItemId: (action as IFoodItemClicked).foodItemId,
      regionCode: selectSettingsRegionCode(state)
    })),
    switchMap(({ dietType, foodItemId, regionCode }) => (
      getFoodDetailsData(
        foodItemId,
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionCode
      )
      .then((currentFoodData) => setCurrentFoodDetailsSuccess(currentFoodData))
      .catch((error: IBackendError) => setError(error))
    ))
  )
);
