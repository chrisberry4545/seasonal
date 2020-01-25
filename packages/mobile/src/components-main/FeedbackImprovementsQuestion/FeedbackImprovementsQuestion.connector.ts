import {
  IFeedbackImprovementsQuestionDispatchProps
} from './FeedbackImprovementsQuestion.interface';

import { connect } from 'react-redux';
import {
  FeedbackImprovementsQuestion
} from './FeedbackImprovementsQuestion';
import {
  sendFeedbackImprovements, closeFeedbackPopup
} from '../../store';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFeedbackImprovementsQuestionDispatchProps => {
  return {
    closeFeedbackModal: () => dispatch(closeFeedbackPopup()),
    sendFeedbackImprovements: (improvements: string) =>
      dispatch(sendFeedbackImprovements(improvements))
  };
};

export const FeedbackImprovementsQuestionConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackImprovementsQuestion);
