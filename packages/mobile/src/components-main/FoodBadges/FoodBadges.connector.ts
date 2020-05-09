import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  FoodBadges
} from './FoodBadges';
import {
  selectCurrentFoodDetailsBadges, badgeItemClicked
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IState } from '../../store';
import {
  IFoodBadgesInputProps,
  IFoodBadgesDispatchProps
} from './FoodBadges.interface';

const mapStateToProps = (
  state: IState
): IFoodBadgesInputProps => ({
  badges: selectCurrentFoodDetailsBadges(state)
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
