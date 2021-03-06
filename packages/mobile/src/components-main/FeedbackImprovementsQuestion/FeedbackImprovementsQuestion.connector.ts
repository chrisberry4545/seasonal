import {
  IFeedbackImprovementsQuestionDispatchProps
} from './FeedbackImprovementsQuestion.interface';

import { connect } from 'react-redux';
import {
  FeedbackImprovementsQuestion
} from './FeedbackImprovementsQuestion';
import {
  feedbackImprovementsChanged,
  sendFeedbackImprovementsStart, closeFeedbackPopup
} from '../../store';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFeedbackImprovementsQuestionDispatchProps => {
  return {
    closeFeedbackModal: () => dispatch(closeFeedbackPopup()),
    feedbackImprovementsChanged: (improvements: string) =>
      dispatch(feedbackImprovementsChanged(improvements)),
    sendFeedbackImprovementsStart: () => dispatch(sendFeedbackImprovementsStart())
  };
};

export const FeedbackImprovementsQuestionConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackImprovementsQuestion);
