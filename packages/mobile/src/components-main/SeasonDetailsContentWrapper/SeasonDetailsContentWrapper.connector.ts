import {
  ISeasonDetailsContentWrapperInputProps
} from './SeasonDetailsContentWrapper.interface';

import { connect } from 'react-redux';
import {
  SeasonDetailsContentWrapper
} from './SeasonDetailsContentWrapper';
import {
  selectIsBasicSeasonsLoading, selectCurrentSeasonName
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IState } from '../../store';

const mapStateToProps = (
  state: IState
): ISeasonDetailsContentWrapperInputProps => {
  return {
    currentSeasonName: selectCurrentSeasonName(state),
    isLoading: selectIsBasicSeasonsLoading(state)
  };
};

export const SeasonDetailsContentWrapperConnector = connect(
  mapStateToProps
)(SeasonDetailsContentWrapper);
