import {
  ISelectLocationModalInputProps, ISelectLocationModalDispatchProps
} from './SelectLocationModal.interface';

import { connect } from 'react-redux';
import {
  SelectLocationModal
} from './SelectLocationModal';
import {
  closeLocationPopup,
  selectIsLocationSettingsPopupVisible
} from '@chrisb-dev/seasonal-shared';
import { IState } from '../../interfaces';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISelectLocationModalInputProps => {
  return {
    isVisible: selectIsLocationSettingsPopupVisible(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ISelectLocationModalDispatchProps => {
  return {
    closeLocationPopup: () => dispatch(closeLocationPopup())
  };
};

export const SelectLocationModalConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectLocationModal);
