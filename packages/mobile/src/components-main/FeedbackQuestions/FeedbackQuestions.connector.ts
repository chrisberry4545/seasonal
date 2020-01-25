import {
  IFeedbackQuestionsInputProps,
  IFeedbackQuestionsDispatchProps
} from './FeedbackQuestions.interface';

import { connect } from 'react-redux';
import {
  FeedbackQuestions
} from './FeedbackQuestions';
import {
  selectIsFeedbackDoYouLikeTheAppQuestionVisible,
  selectIsFeedbackImprovementsQuestionVisible,
  selectIsFeedbackRateOnStoreQuestionVisible,
  sendFeedbackDoNotLikeApp,
  sendFeedbackImprovements,
  sendFeedbackLikeApp,
  sendFeedbackWantToRate
} from '../../store';
import { IState } from '../../interfaces';
import { Dispatch } from 'redux';

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

const mapDispatchToProps = (
  dispatch: Dispatch
): IFeedbackQuestionsDispatchProps => {
  return {
    sendFeedbackDoNotLikeApp: () => dispatch(sendFeedbackDoNotLikeApp()),
    sendFeedbackDoNotWantToRate: () => dispatch(sendFeedbackWantToRate()),
    sendFeedbackImprovements: (improvements: string) =>
      dispatch(sendFeedbackImprovements(improvements)),
    sendFeedbackLikeApp: () => dispatch(sendFeedbackLikeApp()),
    sendFeedbackWantToRate: () => dispatch(sendFeedbackWantToRate())
  };
};

export const FeedbackQuestionsConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackQuestions);
