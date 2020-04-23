import { selectSettingsTimesAppStarted } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { Action } from 'redux';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { delay, filter, map, mapTo, withLatestFrom } from 'rxjs/operators';
import { AppSeasonalEpic } from '../../seasonal-epic.type';
import { IState } from '../../state.interface';
import { INIT_FEEDBACK_STATE, showFeedbackPopup } from '../feedback.actions';
import { selectHasBeenShownFeedbackQuestions, selectHasGivenFeedback } from '../feedback.selectors';

export const showFeedbackForm$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_FEEDBACK_STATE),
    withLatestFrom(state$),
    map(([, state]) => ({
      hasBeenShownFeedbackQuestions:
        selectHasBeenShownFeedbackQuestions(state),
      hasGivenFeedback: selectHasGivenFeedback(state),
      timesAppStarted: selectSettingsTimesAppStarted(state)
    })),
    filter(({
      hasBeenShownFeedbackQuestions,
      hasGivenFeedback,
      timesAppStarted
    }) => (Boolean(
      !hasBeenShownFeedbackQuestions
      && !hasGivenFeedback
      && timesAppStarted
      && timesAppStarted > 2
    ))),
    delay(10000),
    mapTo(showFeedbackPopup())
  )
);
