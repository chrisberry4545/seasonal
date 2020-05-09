import {
  FOOD_ITEM_CLICKED,
  BADGE_DETAILS_SELECT_FOOD,
  IFoodItemClicked,
  setCurrentFoodDetailsStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToFoodDetails$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      FOOD_ITEM_CLICKED,
      BADGE_DETAILS_SELECT_FOOD
    ),
    map((action) => (
      setCurrentFoodDetailsStart((action as IFoodItemClicked).foodItemId)
    ))
  )
);
