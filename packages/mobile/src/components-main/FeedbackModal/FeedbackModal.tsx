import React, { FC } from 'react';
import { IFeedbackModalProps } from './FeedbackModal.interface';
import { FeedbackQuestionsConnector } from '../FeedbackQuestions/FeedbackQuestions.connector';
import { ModalLayout } from '../../components-layout';

export const FeedbackModal: FC<IFeedbackModalProps> = ({
  isVisible,
  closeFeedbackModal
}) => (
  <ModalLayout
    isVisible={isVisible}
    onClose={closeFeedbackModal}>
      <FeedbackQuestionsConnector />
  </ModalLayout>
);
