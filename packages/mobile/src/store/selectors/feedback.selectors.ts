import { createSelector } from 'reselect';
import { IState, FeedbackViewStates } from '../../interfaces';

export const selectFeedbackState = (state: IState) => state.feedback;

export const selectHasBeenShownFeedbackQuestions = createSelector(
  selectFeedbackState,
  (feedbackState): boolean => feedbackState.hasBeenShownFeedbackQuestions
);

export const selectHasGivenFeedback = createSelector(
  selectFeedbackState,
  (feedbackState): boolean => feedbackState.hasGivenFeedback
);

export const selectIsFeedbackPopupVisible = createSelector(
  selectFeedbackState,
  (feedbackState): boolean => feedbackState.isFeedbackPopupVisible
);

export const selectIsFeedbackDoYouLikeTheAppQuestionVisible =
  createSelector(
    selectFeedbackState,
    (feedbackState): boolean => feedbackState.currentFeedbackView ===
      FeedbackViewStates.DO_YOU_LIKE_THE_APP
  );

export const selectIsFeedbackImprovementsQuestionVisible =
  createSelector(
    selectFeedbackState,
    (feedbackState): boolean => feedbackState.currentFeedbackView ===
      FeedbackViewStates.IMPROVEMENTS
  );

export const selectIsFeedbackRateOnStoreQuestionVisible =
  createSelector(
    selectFeedbackState,
    (feedbackState): boolean => feedbackState.currentFeedbackView ===
      FeedbackViewStates.RATE_ON_STORE
  );
