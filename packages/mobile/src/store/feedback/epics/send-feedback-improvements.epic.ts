import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { sendFeedbackImprovementsSuccess, SEND_FEEDBACK_IMPROVEMENTS_START } from '../feedback.actions';
import { selectFeedbackImprovements } from '../feedback.selectors';

export const sendFeedbackImprovements$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SEND_FEEDBACK_IMPROVEMENTS_START),
    withLatestFrom(state$),
    map(([, state]) => selectFeedbackImprovements(state)),
    filter((improvements) => improvements !== undefined),
    map((improvements) => sendFeedbackImprovementsSuccess(improvements!))
  )
);
