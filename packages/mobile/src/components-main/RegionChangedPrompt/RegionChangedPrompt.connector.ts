import {
  IRegionChangedPromptInputProps, IRegionChangedPromptDispatchProps
} from './RegionChangedPrompt.interface';

import { connect } from 'react-redux';
import {
  RegionChangedPrompt
} from './RegionChangedPrompt';
import {
  hideRegionChangePrompt,
  showLocationPopup,
  selectCurrentRegion,
  selectIsRegionChangePromptVisible
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IState } from '../../store';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IRegionChangedPromptInputProps => {
  return {
    currentRegion: selectCurrentRegion(state),
    isVisible: selectIsRegionChangePromptVisible(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IRegionChangedPromptDispatchProps => {
  return {
    hideRegionChangedPrompt: () => dispatch(hideRegionChangePrompt()),
    showRegionSelector: () => dispatch(showLocationPopup())
  };
};

export const RegionChangedPromptConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegionChangedPrompt);
