import {
  SHOW_FEEDBACK_POPUP,
  CLOSE_FEEDBACK_POPUP,
  SEND_FEEDBACK_DO_NOT_LIKE_APP,
  SEND_FEEDBACK_IMPROVEMENTS_SUCCESS,
  SEND_FEEDBACK_LIKE_APP,
  SEND_FEEDBACK_DO_NOT_WANT_TO_RATE,
  SEND_FEEDBACK_WANT_TO_RATE,
  INIT_FEEDBACK_STATE,
  IInitFeedbackState,
  ON_MENU_FEEDBACK_SELECTED,
  FEEDBACK_IMPROVEMENTS_CHANGED,
  IFeedbackImprovementsChanged
} from './feedback.actions';
import { IFeedbackState, FeedbackViewStates } from './feedback-state.interface';
import { Action } from 'redux';

const getDefaultState = (): IFeedbackState => ({
  currentFeedbackView: FeedbackViewStates.DO_YOU_LIKE_THE_APP,
  hasBeenShownFeedbackQuestions: false,
  hasGivenFeedback: false,
  improvements: undefined,
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
    case ON_MENU_FEEDBACK_SELECTED:
    case SHOW_FEEDBACK_POPUP:
      return {
        ...state,
        currentFeedbackView: FeedbackViewStates.DO_YOU_LIKE_THE_APP,
        hasBeenShownFeedbackQuestions: true,
        isFeedbackPopupVisible: true
      };
    case FEEDBACK_IMPROVEMENTS_CHANGED:
      return {
        ...state,
        improvements: (action as IFeedbackImprovementsChanged).improvements
      };
    case SEND_FEEDBACK_WANT_TO_RATE:
    case SEND_FEEDBACK_IMPROVEMENTS_SUCCESS:
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
