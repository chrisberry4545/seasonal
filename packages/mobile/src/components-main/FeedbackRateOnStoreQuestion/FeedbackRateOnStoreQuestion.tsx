import React, { FC } from 'react';
import { IFeedbackRateOnStoreQuestionDispatchProps } from './FeedbackRateOnStoreQuestion.interface';
import { TextMedium } from '../../components-elements';
import { FeedbackQuestionsLayout } from '../../components-layout';
import { TextStyle } from 'react-native';
import i18n from 'i18n-js';

const styleFeedbackRateOnStoreQuestionText: TextStyle = {
  textAlign: 'center'
};

export const FeedbackRateOnStoreQuestion: FC<
  IFeedbackRateOnStoreQuestionDispatchProps
> = ({
  sendFeedbackDoNotWantToRate,
  sendFeedbackWantToRate
}) => (
  <FeedbackQuestionsLayout
    questionTitle={i18n.t('feedbackRateOnStoreQuestionTitle')}
    rejectButtonText={i18n.t('notNow')}
    onRejectButtonClicked={sendFeedbackDoNotWantToRate}
    confirmButtonText={i18n.t('feedbackRateTheApp')}
    onConfirmButtonClicked={sendFeedbackWantToRate}>
    <TextMedium style={styleFeedbackRateOnStoreQuestionText}>
      {i18n.t('feedbackRateOnStoreQuestion')}
    </TextMedium>
  </FeedbackQuestionsLayout>
);
