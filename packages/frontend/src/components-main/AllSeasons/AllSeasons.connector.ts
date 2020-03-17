import { connect } from 'react-redux';
import {
  AllSeasons
} from './AllSeasons';

import { IState } from '../../interfaces';
import {
  IAllSeasonsInputProps,
  IAllSeasonsDispatchProps
} from './AllSeasons.interface';
import { Dispatch } from 'redux';
import {
  foodItemClicked,
  selectAllSeasonsVisibleFoodData,
  selectIsAllSeasonsFoodLoading,
  increaseNumberOfAllFoodSeasonsInView,
  selectHasMoreSeasonsInAllSeasonsView
} from '@chrisb-dev/seasonal-shared-frontend-redux';

const mapStateToProps = (
  state: IState
): IAllSeasonsInputProps => ({
  hasMoreSeasonsInAllSeasonsView: selectHasMoreSeasonsInAllSeasonsView(state),
  isLoading: selectIsAllSeasonsFoodLoading(state),
  seasons: selectAllSeasonsVisibleFoodData(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IAllSeasonsDispatchProps => ({
  increaseNumberOfAllFoodSeasonsInView: () => (
    dispatch(increaseNumberOfAllFoodSeasonsInView())
  ),
  onFoodClick: (foodItemId: string) => dispatch(foodItemClicked(foodItemId))
});

export const AllSeasonsConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSeasons);
