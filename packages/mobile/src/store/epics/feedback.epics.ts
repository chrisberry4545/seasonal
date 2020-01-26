import { AppSeasonalEpic } from './seasonal-epic.type';
import { Action } from 'redux';
import { StateObservable, ActionsObservable, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import {
  SEND_FEEDBACK_WANT_TO_RATE,
  showFeedbackPopup,
  SHOW_FEEDBACK_POPUP,
  SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
  initFeedbackState,
  INIT_FEEDBACK_STATE,
  CLOSE_FEEDBACK_POPUP,
  SEND_FEEDBACK_IMPROVEMENTS_START,
  sendFeedbackImprovementsSuccess
} from '../actions';
import {
  tap,
  ignoreElements,
  withLatestFrom,
  map,
  filter,
  mapTo,
  switchMap,
  first,
  delay
} from 'rxjs/operators';
import { IState, IFeedbackState } from '../../interfaces';
import { selectSettingsTimesAppStarted, INIT_APP } from '@chrisb-dev/seasonal-shared';
import { goToLinkUrl, setStoredData, getStoredData } from '../../helpers';
import {
  selectHasGivenFeedback,
  selectHasBeenShownFeedbackQuestions,
  selectFeedbackState,
  selectFeedbackImprovements
} from '../selectors';
import { STORE_URL } from '../../config';

const feedbackStorageKey = 'feedbackStorage';

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

export const getStoredFeedbackSettings$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    switchMap(() => getStoredData<IFeedbackState>(feedbackStorageKey)),
    map((feedbackState) => initFeedbackState(feedbackState))
  )
);

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
    first(),
    mapTo(showFeedbackPopup())
  )
);

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

export const showStoreListing$: AppSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SEND_FEEDBACK_WANT_TO_RATE),
    tap(() => goToLinkUrl(STORE_URL)),
    ignoreElements()
  )
);
