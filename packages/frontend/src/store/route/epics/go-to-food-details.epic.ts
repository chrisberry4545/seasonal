import {
  setCurrentFoodDetailsStart,
  INIT_APP
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { IState } from '../../state.interface';
import { Observable } from 'rxjs';
import { map, withLatestFrom, filter } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { LOCATION_CHANGE } from 'connected-react-router';
import { selectCurrentFoodDetailsId } from '../route.selectors';

export const goToFoodDetails$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      INIT_APP,
      LOCATION_CHANGE
    ),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentFoodDetailsId(state)),
    filter((foodDetailsId) => Boolean(foodDetailsId)),
    map((foodDetailsId) => setCurrentFoodDetailsStart(foodDetailsId!))
  )
);
