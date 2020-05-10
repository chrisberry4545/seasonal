import { connect } from 'react-redux';
import {
  FoodBadges
} from './FoodBadges';
import {
  badgeItemClicked,
  selectCurrentFoodDetailsBadges,
  selectIsFoodDataOrBasicSeasonsLoading
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IState } from '../../store';
import {
  IFoodBadgesInputProps,
  IFoodBadgesDispatchProps
} from './FoodBadges.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IFoodBadgesInputProps => ({
  badges: selectCurrentFoodDetailsBadges(state),
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFoodBadgesDispatchProps => ({
  onBadgeClicked: (recipeId: string) => (
    dispatch(badgeItemClicked(recipeId))
  )
});

export const FoodBadgesConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodBadges);
