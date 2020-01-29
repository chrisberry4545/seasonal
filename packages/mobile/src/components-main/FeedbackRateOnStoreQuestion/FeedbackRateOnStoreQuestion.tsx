import React, { FC } from 'react';
import { IFeedbackRateOnStoreQuestionDispatchProps } from './FeedbackRateOnStoreQuestion.interface';
import { TextMedium } from '../../components-elements';
import { FeedbackQuestionsLayout } from '../../components-layout';
import { TextStyle } from 'react-native';

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
    questionTitle='Help others Eat Seasonal'
    rejectButtonText='Not now'
    onRejectButtonClicked={sendFeedbackDoNotWantToRate}
    confirmButtonText='Rate the app'
    onConfirmButtonClicked={sendFeedbackWantToRate}>
    <TextMedium style={styleFeedbackRateOnStoreQuestionText}>
      Rating the app will help other people find the app and
      start eating seasonally
    </TextMedium>
  </FeedbackQuestionsLayout>
);
