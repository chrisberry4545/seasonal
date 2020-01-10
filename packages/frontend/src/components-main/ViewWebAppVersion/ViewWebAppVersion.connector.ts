import { connect } from 'react-redux';
import {
  ViewWebAppVersion
} from './ViewWebAppVersion';
import {
  goToWebVersion
} from '../../store';
import { IViewWebAppVersionDispatchProps } from './ViewWebAppVersion.interface';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): IViewWebAppVersionDispatchProps => ({
  onGoToWebVersion: () => dispatch((goToWebVersion()))
});

export const ViewWebAppVersionConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewWebAppVersion);
