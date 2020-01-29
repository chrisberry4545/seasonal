import {
  IFeedbackModalInputProps,
  IFeedbackModalDispatchProps
} from './FeedbackModal.interface';

import { connect } from 'react-redux';
import {
  FeedbackModal
} from './FeedbackModal';
import { IState } from '../../interfaces';
import {
  selectIsFeedbackPopupVisible,
  closeFeedbackPopup
} from '../../store';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IFeedbackModalInputProps => {
  return {
    isVisible: selectIsFeedbackPopupVisible(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IFeedbackModalDispatchProps => {
  return {
    closeFeedbackModal: () => dispatch(closeFeedbackPopup())
  };
};

export const FeedbackModalConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackModal);
