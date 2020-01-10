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
  selectIsCountryChangePromptVisible
} from '@chrisb-dev/seasonal-shared';
import { IState } from '../../interfaces';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IRegionChangedPromptInputProps => {
  return {
    currentRegion: selectCurrentRegion(state),
    isVisible: selectIsCountryChangePromptVisible(state)
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
