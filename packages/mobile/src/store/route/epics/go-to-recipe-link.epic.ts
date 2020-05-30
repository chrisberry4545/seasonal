import {
  FOOD_DETAILS_SELECT_RECIPE,
  IRecipeItemClicked,
  RECIPE_ITEM_CLICKED,
  selectRecipeById
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, map, tap, withLatestFrom } from 'rxjs/operators';
import { goToLinkUrl } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';

export const goToRecipeLink$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      FOOD_DETAILS_SELECT_RECIPE,
      RECIPE_ITEM_CLICKED
    ),
    withLatestFrom(state$),
    map(([
      action,
      state
    ]) => selectRecipeById(
        (action as IRecipeItemClicked).recipeItemId
      )(state)
    ),
    tap((recipe) => {
      if (recipe) {
        goToLinkUrl(recipe.linkUrl);
      }
    }),
    ignoreElements()
  )
);
