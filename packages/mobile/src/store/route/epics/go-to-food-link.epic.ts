import {
  FOOD_ITEM_CLICKED,
  IFoodItemClicked,
  setCurrentFoodDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ROUTES } from '../../../const';
import { navigate } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';

export const goToFoodLink$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    map((action) => (action as IFoodItemClicked).foodItemId),
    tap((foodItemId) => navigate(ROUTES.FOOD_DETAILS, {
      id: foodItemId
    })),
    map((foodItemId) => setCurrentFoodDetailsStart(foodItemId))
  )
);
