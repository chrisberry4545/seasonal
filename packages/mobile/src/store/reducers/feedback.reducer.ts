import {
  SHOW_FEEDBACK_POPUP,
  CLOSE_FEEDBACK_POPUP,
  SEND_FEEDBACK_DO_NOT_LIKE_APP,
  SEND_FEEDBACK_IMPROVEMENTS,
  SEND_FEEDBACK_LIKE_APP,
  SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
  SEND_FEEDBACK_WANT_TO_RATE,
  INIT_FEEDBACK_STATE,
  IInitFeedbackState
} from '../actions';
import { IFeedbackState, FeedbackViewStates } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): IFeedbackState => ({
  currentFeedbackView: FeedbackViewStates.DO_YOU_LIKE_THE_APP,
  hasBeenShownFeedbackQuestions: false,
  hasGivenFeedback: false,
  isFeedbackPopupVisible: false
});

export function feedbackReducer(
  state = getDefaultState(),
  action: Action
): IFeedbackState {
  switch (action.type) {
    case INIT_FEEDBACK_STATE:
      return {
        ...state,
        ...(action as IInitFeedbackState).feedbackState
      };
    case SHOW_FEEDBACK_POPUP:
      return {
        ...state,
        currentFeedbackView: FeedbackViewStates.DO_YOU_LIKE_THE_APP,
        hasBeenShownFeedbackQuestions: true,
        isFeedbackPopupVisible: true
      };
    case SEND_FEEDBACK_WANT_TO_RATE:
    case SEND_FEEDBACK_IMPROVEMENTS:
      return {
        ...state,
        hasGivenFeedback: true,
        isFeedbackPopupVisible: false
      };
    case SEND_FEEDBACK_DO_NOT_WANT_TO_RATE:
    case CLOSE_FEEDBACK_POPUP:
      return {
        ...state,
        isFeedbackPopupVisible: false
      };
    case SEND_FEEDBACK_DO_NOT_LIKE_APP:
      return {
        ...state,
        currentFeedbackView: FeedbackViewStates.IMPROVEMENTS
      };
    case SEND_FEEDBACK_LIKE_APP:
      return {
        ...state,
        currentFeedbackView: FeedbackViewStates.RATE_ON_STORE
      };
    default:
      return state;
  }
}
