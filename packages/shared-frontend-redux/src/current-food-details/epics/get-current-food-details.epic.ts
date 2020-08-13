import { getFoodDetailsData } from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { DIET_TYPE, IBackendError } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { setError } from '../../error';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { selectSettingsDietType, selectSettingsRegionId, selectSettingsLanguage } from '../../settings';
import { IState } from '../../state.interface';
import { IFoodItemClicked } from '../../ui';
import {
  setCurrentFoodDetailsSuccess,
  SET_CURRENT_FOOD_DETAILS_ON_CHANGE,
  SET_CURRENT_FOOD_DETAILS_START
} from '../current-food-details.actions';

export const getCurrentFoodDetails$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_CURRENT_FOOD_DETAILS_START,
      SET_CURRENT_FOOD_DETAILS_ON_CHANGE
    ),
    withLatestFrom(state$),
    map(([action, state]: [Action, IState]) => ({
      dietType: selectSettingsDietType(state),
      foodItemId: (action as IFoodItemClicked).foodItemId,
      language: selectSettingsLanguage(state),
      regionId: selectSettingsRegionId(state)
    })),
    switchMap(({ dietType, foodItemId, language, regionId }) => (
      getFoodDetailsData(
        foodItemId,
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionId,
        language
      )
      .then((currentFoodData) => setCurrentFoodDetailsSuccess(currentFoodData))
      .catch((error: IBackendError) => setError(error))
    ))
  )
);
