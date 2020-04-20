import { connect } from 'react-redux';
import {
  FoodBadges
} from './FoodBadges';
import {
  selectCurrentFoodDetailsBadges
} from '@chrisb-dev/seasonal-shared-frontend-redux';

import { IState } from '../../store';
import {
  IFoodBadgesInputProps
} from './FoodBadges.interface';

const mapStateToProps = (
  state: IState
): IFoodBadgesInputProps => ({
  badges: selectCurrentFoodDetailsBadges(state)
});

export const FoodBadgesConnecter = connect(
  mapStateToProps
)(FoodBadges);
