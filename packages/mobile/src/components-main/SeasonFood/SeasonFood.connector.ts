import {
  ISeasonFoodInputProps, ISeasonFoodDispatchProps
} from './SeasonFood.interface';

import { connect } from 'react-redux';
import {
  SeasonFood
} from './SeasonFood';
import {
  selectVisibleFoodData,
  foodItemClicked,
  selectIsCurrentSeasonFoodLoading,
  selectIsListViewShown,
  toggleListView
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IState } from '../../store';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonFoodInputProps => {
  return {
    food: selectVisibleFoodData(state),
    isListViewShown: selectIsListViewShown(state),
    isLoading: selectIsCurrentSeasonFoodLoading(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonFoodDispatchProps => {
  return {
    onFoodClick: (foodItemId) => dispatch(foodItemClicked(foodItemId)),
    onToggleListView: () => dispatch(toggleListView())
  };
};

export const SeasonFoodConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonFood);
