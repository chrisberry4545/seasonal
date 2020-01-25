import React, { FC, Fragment } from 'react';
import { IFeedbackQuestionsInputProps } from './FeedbackQuestions.interface';
import {
  FeedbackDoYouLikeTheAppQuestionConnector
} from '../FeedbackDoYouLikeTheAppQuestion/FeedbackDoYouLikeTheAppQuestion.connector';
import {
  FeedbackImprovementsQuestionConnector
} from '../FeedbackImprovementsQuestion/FeedbackImprovementsQuestion.connector';
import {
  FeedbackRateOnStoreQuestionConnector
} from '../FeedbackRateOnStoreQuestion/FeedbackRateOnStoreQuestion.connector';

export const FeedbackQuestions: FC<IFeedbackQuestionsInputProps> = ({
  isDoYouLikeTheAppQuestionVisible,
  isImprovementsQuestionVisible,
  isRateOnStoreQuestionVisible
}) => (
  <Fragment>
    {
      isDoYouLikeTheAppQuestionVisible
        ? <FeedbackDoYouLikeTheAppQuestionConnector />
        : null
    }
    {
      isImprovementsQuestionVisible
        ? <FeedbackImprovementsQuestionConnector />
        : null
    }
    {
      isRateOnStoreQuestionVisible
        ? <FeedbackRateOnStoreQuestionConnector />
        : null
    }
  </Fragment>
);
