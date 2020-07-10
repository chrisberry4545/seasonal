import React, { FC } from 'react';
import { IFeedbackDoYouLikeTheAppQuestionDispatchProps } from './FeedbackDoYouLikeTheAppQuestion.interface';
import { FeedbackQuestionsLayout } from '../../components-layout';
import i18n from 'i18n-js';

export const FeedbackDoYouLikeTheAppQuestion: FC<
  IFeedbackDoYouLikeTheAppQuestionDispatchProps
> = ({
  sendFeedbackDoNotLikeApp,
  sendFeedbackLikeApp
}) => (
  <FeedbackQuestionsLayout
    questionTitle={i18n.t('feedbackDoYouLikeTheAppQuestion')}
    rejectButtonText={i18n.t('no')}
    onRejectButtonClicked={sendFeedbackDoNotLikeApp}
    confirmButtonText={i18n.t('yes')}
    onConfirmButtonClicked={sendFeedbackLikeApp}>
  </FeedbackQuestionsLayout>
);
