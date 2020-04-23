import { INIT_APP, setCurrentFoodDetailsStart } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { selectCurrentFoodDetailsId } from '../route.selectors';

export const initFoodDetails$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentFoodDetailsId(state)),
    filter((foodDetailsId) => Boolean(foodDetailsId)),
    map((foodDetailsId) => setCurrentFoodDetailsStart(foodDetailsId!))
  )
);
