import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { SharedSeasonalEpic } from '../../seasonal-epic.type';
import { SET_LANGUAGE_SUCCESS } from '../../settings';
import { IState } from '../../state.interface';
import { setCurrentBadgeDetailsOnChange } from '../current-badge-details.actions';
import { selectCurrentBadgeDetailsId } from '../current-badge-details.selectors';

export const updateBadgeDetailsOnChange$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_LANGUAGE_SUCCESS),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentBadgeDetailsId(state)),
    filter((currentBadgeId) => Boolean(currentBadgeId)),
    map((currentBadgeId) => (
      setCurrentBadgeDetailsOnChange(currentBadgeId))
    )
  )
);
