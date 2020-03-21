import { connect } from 'react-redux';
import {
  SettingsBackButton
} from './SettingsBackButton';
import {
  goBackFromSettingsPage
} from '@chrisb-dev/seasonal-shared-frontend-redux';

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
