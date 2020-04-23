import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { ignoreElements, map, tap, withLatestFrom } from 'rxjs/operators';
import { setStoredData } from '../../../helpers';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import {
  CLOSE_FEEDBACK_POPUP,
  SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
  SEND_FEEDBACK_WANT_TO_RATE,
  SHOW_FEEDBACK_POPUP
} from '../feedback.actions';
import { selectFeedbackState } from '../feedback.selectors';
import { feedbackStorageKey } from './feedback-storage-key';

export const storeFeedbackSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SHOW_FEEDBACK_POPUP,
      SEND_FEEDBACK_WANT_TO_RATE,
      SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
      CLOSE_FEEDBACK_POPUP
    ),
    withLatestFrom(state$),
    map(([, state]) => selectFeedbackState(state)),
    tap((feedbackState) => setStoredData(feedbackStorageKey, feedbackState)),
    ignoreElements()
  )
);
