import { connect } from 'react-redux';
import {
  CurrentSeasonName
} from './CurrentSeasonName';
import {
  selectCurrentSeasonName,
  selectIsCurrentSeasonFoodLoading
} from '@chrisb-dev/seasonal-shared';
import {
  ICurrentSeasonName
} from './CurrentSeasonName.interface';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): ICurrentSeasonName => ({
  currentSeasonName: selectCurrentSeasonName(state),
  isLoading: selectIsCurrentSeasonFoodLoading(state)
});

export const CurrentSeasonNameConnecter = connect(
  mapStateToProps
)(CurrentSeasonName);
