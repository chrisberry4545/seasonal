import {
  IFeedbackRateOnStoreQuestionDispatchProps
} from './FeedbackRateOnStoreQuestion.interface';

import { connect } from 'react-redux';
import {
  FeedbackRateOnStoreQuestion
} from './FeedbackRateOnStoreQuestion';
import {
  sendFeedbackWantToRate, sendFeedbackDoNotWantToRate
} from '../../store';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFeedbackRateOnStoreQuestionDispatchProps => {
  return {
    sendFeedbackDoNotWantToRate: () => dispatch(sendFeedbackDoNotWantToRate()),
    sendFeedbackWantToRate: () => dispatch(sendFeedbackWantToRate())
  };
};

export const FeedbackRateOnStoreQuestionConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackRateOnStoreQuestion);
