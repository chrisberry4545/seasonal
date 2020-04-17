import { connect } from 'react-redux';
import {
  AllSeasons
} from './AllSeasons';

import { IState } from '../../store';
import {
  IAllSeasonsInputProps,
  IAllSeasonsDispatchProps
} from './AllSeasons.interface';
import { Dispatch } from 'redux';
import {
  selectIsAllSeasonsFoodLoading,
  selectAllSeasonsVisibleFoodData,
  increaseNumberOfAllFoodSeasonsInView,
  foodItemClicked,
  toggleListView,
  selectIsListViewShown
} from '@chrisb-dev/seasonal-shared-frontend-redux';

const mapStateToProps = (
  state: IState
): IAllSeasonsInputProps => ({
  isListViewShown: selectIsListViewShown(state),
  isLoading: selectIsAllSeasonsFoodLoading(state),
  seasons: selectAllSeasonsVisibleFoodData(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IAllSeasonsDispatchProps => ({
  increaseNumberOfAllFoodSeasonsInView: () => (
    dispatch(increaseNumberOfAllFoodSeasonsInView())
  ),
  onFoodClick: (foodItemId: string) => dispatch(foodItemClicked(foodItemId)),
  onToggleListView: () => dispatch(toggleListView())
});

export const AllSeasonsConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSeasons);
