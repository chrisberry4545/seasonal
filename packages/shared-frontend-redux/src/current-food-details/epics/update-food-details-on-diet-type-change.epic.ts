import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { SET_DIET_TYPE } from '../../settings';
import { IState } from '../../state.interface';
import { setCurrentFoodDetailsOnDietChange } from '../current-food-details.actions';
import { selectCurrentFoodDetailsId } from '../current-food-details.selectors';

export const updateFoodDetailsOnDietTypeChange$: SharedSeasonalEpic = (
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
