import { connect } from 'react-redux';
import {
  AllSeasonsFood
} from './AllSeasonsFood';

import { IState, selectIsCurrentTabFood } from '../../store';
import {
  IAllSeasonsFoodInputProps,
  IAllSeasonsFoodDispatchProps
} from './AllSeasonsFood.interface';
import { Dispatch } from 'redux';
import {
  foodItemClicked,
  selectAllSeasonsVisibleFoodData,
  selectIsAllSeasonsFoodLoading,
  increaseNumberOfAllSeasonsInView,
  selectHasMoreSeasonsInAllSeasonsView
} from '@chrisb-dev/seasonal-shared-frontend-redux';

const mapStateToProps = (
  state: IState
): IAllSeasonsFoodInputProps => ({
  hasMoreSeasonsInAllSeasonsView: selectHasMoreSeasonsInAllSeasonsView(state),
  isCurrentTabFood: selectIsCurrentTabFood(state),
  isLoading: selectIsAllSeasonsFoodLoading(state),
  seasons: selectAllSeasonsVisibleFoodData(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IAllSeasonsFoodDispatchProps => ({
  increaseNumberOfAllSeasonsInView: () => (
    dispatch(increaseNumberOfAllSeasonsInView())
  ),
  onFoodClick: (foodItemId: string) => dispatch(foodItemClicked(foodItemId))
});

export const AllSeasonsFoodConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSeasonsFood);
