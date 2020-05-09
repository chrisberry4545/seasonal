import { connect } from 'react-redux';
import {
  FoodForBadge
} from './FoodForBadge';
import {
  selectIsCurrentBadgeDetailsLoading,
  selectVisibleFoodForBadgeDetailsData,
  badgeDetailsSelectFood
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../store';
import {
  IFoodForBadgeInputProps,
  IFoodForBadgeDispatchProps
} from './FoodForBadge.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IFoodForBadgeInputProps => ({
  currentBadgeFood: selectVisibleFoodForBadgeDetailsData(state),
  isLoading: selectIsCurrentBadgeDetailsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFoodForBadgeDispatchProps => ({
  onFoodSelected: (foodId: string) => (
    dispatch(badgeDetailsSelectFood(foodId))
  )
});

export const FoodForBadgeConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodForBadge);
