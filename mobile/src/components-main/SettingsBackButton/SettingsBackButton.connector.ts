import { connect } from 'react-redux';
import {
  SettingsBackButton
} from './SettingsBackButton';
import {
  goBackFromSettingsPage
} from '../../store';

import {
  ISettingsBackButtonDispatchProps
} from './SettingsBackButton.interface';
import { Dispatch } from 'redux';

const mapDispatchToProps = (
  dispatch: Dispatch
): ISettingsBackButtonDispatchProps => ({
  onGoBack: () => dispatch(goBackFromSettingsPage())
});

export const SettingsBackButtonConnecter = connect(
  null,
  mapDispatchToProps
)(SettingsBackButton);
