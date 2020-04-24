import { connect } from 'react-redux';
import {
  AllSeasonsFood
} from './AllSeasonsFood';

import { IState } from '../../store';
import {
  IAllSeasonsFoodInputProps,
  IAllSeasonsFoodDispatchProps
} from './AllSeasonsFood.interface';
import { Dispatch } from 'redux';
import {
  selectIsAllSeasonsFoodLoading,
  selectAllSeasonsVisibleFoodData,
  increaseNumberOfAllSeasonsInView,
  foodItemClicked,
  toggleListView,
  selectIsListViewShown
} from '@chrisb-dev/seasonal-shared-frontend-redux';

const mapStateToProps = (
  state: IState
): IAllSeasonsFoodInputProps => ({
  isListViewShown: selectIsListViewShown(state),
  isLoading: selectIsAllSeasonsFoodLoading(state),
  seasons: selectAllSeasonsVisibleFoodData(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IAllSeasonsFoodDispatchProps => ({
  increaseNumberOfAllSeasonsInView: () => (
    dispatch(increaseNumberOfAllSeasonsInView())
  ),
  onFoodClick: (foodItemId: string) => dispatch(foodItemClicked(foodItemId)),
  onToggleListView: () => dispatch(toggleListView())
});

export const AllSeasonsFoodConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSeasonsFood);
