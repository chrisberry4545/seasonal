import {
  setCurrentBadgeDetailsStart, INIT_APP
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, withLatestFrom, filter } from 'rxjs/operators';
import { WebSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { selectCurrentBadgeDetailsId } from '../route.selectors';
import { LOCATION_CHANGE } from 'connected-react-router';

export const goToBadgeDetails$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      INIT_APP,
      LOCATION_CHANGE
    ),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentBadgeDetailsId(state)),
    filter((badgeDetailsId) => Boolean(badgeDetailsId)),
    map((badgeDetailsId) => (
      setCurrentBadgeDetailsStart(badgeDetailsId!)
    ))
  )
);
