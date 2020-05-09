import {
  FOOD_ITEM_CLICKED,
  BADGE_DETAILS_SELECT_FOOD,
  IFoodItemClicked
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { push } from 'connected-react-router';
import { Action } from 'redux';
import { ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FOOD_DETAILS_URL } from '../../../const';
import { WebSeasonalEpic } from '../../seasonal-epic.type';

export const goToFoodLink$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      FOOD_ITEM_CLICKED,
      BADGE_DETAILS_SELECT_FOOD
    ),
    map((action) => (
      push(`${FOOD_DETAILS_URL}/${(action as IFoodItemClicked).foodItemId}`)
    ))
  )
);
