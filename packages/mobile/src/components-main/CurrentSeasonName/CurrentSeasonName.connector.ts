import { connect } from 'react-redux';
import {
  CurrentSeasonName
} from './CurrentSeasonName';
import {
  selectCurrentSeasonName
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  ICurrentSeasonName
} from './CurrentSeasonName.interface';
import { IState } from '../../interfaces';

const mapStateToProps = (
  state: IState
): ICurrentSeasonName => ({
  currentSeasonName: selectCurrentSeasonName(state)
});

export const CurrentSeasonNameConnecter = connect(
  mapStateToProps
)(CurrentSeasonName);
