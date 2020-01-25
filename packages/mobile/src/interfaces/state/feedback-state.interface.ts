export enum FeedbackViewStates {
  DO_YOU_LIKE_THE_APP = 'DO_YOU_LIKE_THE_APP',
  IMPROVEMENTS = 'IMPROVEMNTS',
  RATE_ON_STORE = 'RATE_ON_STORE'
}

export interface IFeedbackState {
  hasBeenShownFeedbackQuestions: boolean;
  hasGivenFeedback: boolean;
  isFeedbackPopupVisible: boolean;
  currentFeedbackView: FeedbackViewStates;
}
