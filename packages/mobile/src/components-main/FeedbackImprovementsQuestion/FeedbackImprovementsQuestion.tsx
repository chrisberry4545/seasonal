import React, { FC } from 'react';
import { IFeedbackImprovementsQuestionDispatchProps } from './FeedbackImprovementsQuestion.interface';
import { MultilineInput } from '../../components-elements';
import { FeedbackQuestionsLayout } from '../../components-layout';
import i18n from 'i18n-js';

export const FeedbackImprovementsQuestion: FC<
  IFeedbackImprovementsQuestionDispatchProps
> = ({
  closeFeedbackModal,
  feedbackImprovementsChanged,
  sendFeedbackImprovementsStart
}) => (
  <FeedbackQuestionsLayout
    questionTitle={i18n.t('feedbackImprovementQuestion')}
    rejectButtonText={i18n.t('notNow')}
    onRejectButtonClicked={closeFeedbackModal}
    confirmButtonText={i18n.t('feedbackSend')}
    onConfirmButtonClicked={() => sendFeedbackImprovementsStart()}>
    <MultilineInput
      onChangeText={(improvements) => feedbackImprovementsChanged(improvements) }
      placeholder={i18n.t('feedbackImprovementsPlaceholder')}></MultilineInput>
  </FeedbackQuestionsLayout>
);
