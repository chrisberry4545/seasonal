import React, { FC } from 'react';
import { IFeedbackImprovementsQuestionDispatchProps } from './FeedbackImprovementsQuestion.interface';
import { MultilineInput } from '../../components-elements';
import { FeedbackQuestionsLayout } from '../../components-layout';

export const FeedbackImprovementsQuestion: FC<
  IFeedbackImprovementsQuestionDispatchProps
> = ({
  closeFeedbackModal,
  feedbackImprovementsChanged,
  sendFeedbackImprovementsStart
}) => (
  <FeedbackQuestionsLayout
    questionTitle={'We\'d love to hear feedback on how we could improve'}
    rejectButtonText='Not now'
    onRejectButtonClicked={closeFeedbackModal}
    confirmButtonText='Send feedback'
    onConfirmButtonClicked={() => sendFeedbackImprovementsStart()}>
    <MultilineInput
      onChangeText={(improvements) => feedbackImprovementsChanged(improvements) }
      placeholder='Your feedback'></MultilineInput>
  </FeedbackQuestionsLayout>
);
