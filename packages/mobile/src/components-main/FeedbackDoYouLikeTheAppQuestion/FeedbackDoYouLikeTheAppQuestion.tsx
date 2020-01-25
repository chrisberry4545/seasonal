import React, { FC } from 'react';
import { IFeedbackDoYouLikeTheAppQuestionDispatchProps } from './FeedbackDoYouLikeTheAppQuestion.interface';
import { FeedbackQuestionsLayout } from '../../components-layout';

export const FeedbackDoYouLikeTheAppQuestion: FC<
  IFeedbackDoYouLikeTheAppQuestionDispatchProps
> = ({
  sendFeedbackDoNotLikeApp,
  sendFeedbackLikeApp
}) => (
  <FeedbackQuestionsLayout
    questionTitle='Is Eat Seasonal useful?'
    rejectButtonText='No'
    onRejectButtonClicked={sendFeedbackDoNotLikeApp}
    confirmButtonText='Yes'
    onConfirmButtonClicked={sendFeedbackLikeApp}>
  </FeedbackQuestionsLayout>
);
