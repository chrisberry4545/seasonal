import { FOOD_DETAILS_SELECT_RECIPE, IRecipeItemClicked, RECIPE_ITEM_CLICKED, selectCurrentSeasonRecipesById } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';

export const goToRecipeLink$: WebSeasonalEpic = (
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
    ]) => selectCurrentSeasonRecipesById(
        (action as IRecipeItemClicked).recipeItemId
      )(state)
    ),
    map((recipe) => {
      if (recipe) {
        window.open(recipe.linkUrl, '_blank');
      }
      return { type: '' };
    })
  )
);
