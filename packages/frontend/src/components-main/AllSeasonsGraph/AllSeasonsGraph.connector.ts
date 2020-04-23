import { connect } from 'react-redux';
import {
  AllSeasonsGraph
} from './AllSeasonsGraph';

import { IState, selectIsCurrentTabFood } from '../../store';
import {
  IAllSeasonsGraphInputProps
} from './AllSeasonsGraph.interface';
import {
  selectFoodInSeasonGraphData
} from '@chrisb-dev/seasonal-shared-frontend-redux';

const mapStateToProps = (
  state: IState
): IAllSeasonsGraphInputProps => ({
  foodInSeasonGraphData: selectFoodInSeasonGraphData(state),
  isCurrentTabFood: selectIsCurrentTabFood(state)
});

export const AllSeasonsGraphConnector = connect(
  mapStateToProps
)(AllSeasonsGraph);
