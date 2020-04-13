import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getFoodDetailsData
} from '@chrisb-dev/seasonal-shared-frontend-utilities';

import {
  setCurrentFoodDetailsSuccess,
  SET_CURRENT_FOOD_DETAILS_START,
  setCurrentFoodDetailsOnDietChange,
  SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE
} from './current-food-details.actions';
import {
  setError
} from '../error';
import {
  IFoodItemClicked
} from '../ui';
import {
  SET_DIET_TYPE
} from '../settings';

import {
  map,
  switchMap,
  withLatestFrom,
  filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from '../seasonal-epic.type';
import {
  IBackendError,
  DIET_TYPE
} from '@chrisb-dev/seasonal-shared-models';
import { IState } from '../state.interface';
import {
  selectSettingsDietType,
  selectSettingsRegionId
} from '../settings';
import {
  selectCurrentFoodDetailsId
} from '../current-food-details';

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
      regionId: selectSettingsRegionId(state)
    })),
    switchMap(({ dietType, foodItemId, regionId }) => (
      getFoodDetailsData(
        foodItemId,
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionId
      )
      .then((currentFoodData) => setCurrentFoodDetailsSuccess(currentFoodData))
      .catch((error: IBackendError) => setError(error))
    ))
  )
);
