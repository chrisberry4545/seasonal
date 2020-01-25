import React, { FC } from 'react';
import { IFeedbackImprovementsQuestionDispatchProps } from './FeedbackImprovementsQuestion.interface';
import { MultilineInput } from '../../components-elements';
import { FeedbackQuestionsLayout } from '../../components-layout';

export const FeedbackImprovementsQuestion: FC<
  IFeedbackImprovementsQuestionDispatchProps
> = ({
  closeFeedbackModal,
  sendFeedbackImprovements
}) => (
  <FeedbackQuestionsLayout
    questionTitle={'We\'d love to hear feedback on how we could improve'}
    rejectButtonText='Not now'
    onRejectButtonClicked={closeFeedbackModal}
    confirmButtonText='Send feedback'
    onConfirmButtonClicked={() => sendFeedbackImprovements('test')}>
    <MultilineInput placeholder='Your feedback'></MultilineInput>
  </FeedbackQuestionsLayout>
);
