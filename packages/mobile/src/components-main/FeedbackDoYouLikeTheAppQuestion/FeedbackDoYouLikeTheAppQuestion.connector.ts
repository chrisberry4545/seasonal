import {
  IFeedbackDoYouLikeTheAppQuestionDispatchProps
} from './FeedbackDoYouLikeTheAppQuestion.interface';

import { connect } from 'react-redux';
import {
  FeedbackDoYouLikeTheAppQuestion
} from './FeedbackDoYouLikeTheAppQuestion';
import {
  sendFeedbackDoNotLikeApp,
  sendFeedbackLikeApp
} from '../../store';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFeedbackDoYouLikeTheAppQuestionDispatchProps => {
  return {
    sendFeedbackDoNotLikeApp: () => dispatch(sendFeedbackDoNotLikeApp()),
    sendFeedbackLikeApp: () => dispatch(sendFeedbackLikeApp())
  };
};

export const FeedbackDoYouLikeTheAppQuestionConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackDoYouLikeTheAppQuestion);
