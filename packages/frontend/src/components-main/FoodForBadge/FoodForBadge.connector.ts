import { connect } from 'react-redux';
import {
  FoodForBadge
} from './FoodForBadge';
import {
  selectIsFoodDataOrBasicSeasonsLoading,
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
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
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
