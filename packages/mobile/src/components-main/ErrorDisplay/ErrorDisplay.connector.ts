import {
  IErrorDisplayInputProps,
  IErrorDisplayDispatchProps
} from './ErrorDisplay.interface';

import { connect } from 'react-redux';
import {
  ErrorDisplay
} from './ErrorDisplay';
import {
  hideErrorDisplay,
  selectIsErrorDisplayVisible
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IState } from '../../interfaces';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IErrorDisplayInputProps => {
  return {
    isVisible: selectIsErrorDisplayVisible(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IErrorDisplayDispatchProps => {
  return {
    hideErrorDisplay: () => dispatch(hideErrorDisplay())
  };
};

export const ErrorDisplayConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorDisplay);
