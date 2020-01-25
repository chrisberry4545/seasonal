import {
  IFeedbackQuestionsInputProps
} from './FeedbackQuestions.interface';

import { connect } from 'react-redux';
import {
  FeedbackQuestions
} from './FeedbackQuestions';
import {
  selectIsFeedbackDoYouLikeTheAppQuestionVisible,
  selectIsFeedbackImprovementsQuestionVisible,
  selectIsFeedbackRateOnStoreQuestionVisible
} from '../../store';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): IFeedbackQuestionsInputProps => {
  return {
    isDoYouLikeTheAppQuestionVisible:
      selectIsFeedbackDoYouLikeTheAppQuestionVisible(state),
    isImprovementsQuestionVisible:
      selectIsFeedbackImprovementsQuestionVisible(state),
    isRateOnStoreQuestionVisible:
      selectIsFeedbackRateOnStoreQuestionVisible(state)
  };
};

export const FeedbackQuestionsConnector = connect(
  mapStateToProps
)(FeedbackQuestions);
