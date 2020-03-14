import { connect } from 'react-redux';
import {
  FoodTable
} from './FoodTable';
import {
  selectIsCurrentTabFood
} from '../../store';
import {
  selectIsCurrentSeasonFoodLoading,
  selectVisibleFoodData,
  foodItemClicked
} from '@chrisb-dev/seasonal-shared-frontend-utilities';
import { IState } from '../../interfaces';
import {
  IFoodTableInputProps,
  IFoodTableDispatchProps
} from './FoodTable.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IFoodTableInputProps => {
  return {
    food: selectVisibleFoodData(state),
    isCurrentTabFood: selectIsCurrentTabFood(state),
    isLoading: selectIsCurrentSeasonFoodLoading(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IFoodTableDispatchProps => {
  return {
    onFoodClick: (foodItemId) => dispatch(foodItemClicked(foodItemId))
  };
};

export const FoodTableConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodTable);
