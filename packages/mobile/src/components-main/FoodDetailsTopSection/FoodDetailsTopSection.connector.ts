import { connect } from 'react-redux';
import {
  FoodDetailsTopSection
} from './FoodDetailsTopSection';
import {
  selectCurrentFoodDetailsName,
  selectCurrentFoodDetailsImageUrl,
  selectIsFoodDataOrBasicSeasonsLoading
} from '@chrisb-dev/seasonal-shared';
import {
  goBackFromFoodDetails
} from '../../store';

import { IState } from '../../interfaces';
import {
  IFoodDetailsTopSectionInputProps,
  IFoodDetailsTopSectionDispatchProps
} from './FoodDetailsTopSection.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IFoodDetailsTopSectionInputProps => ({
  foodImageUrl: selectCurrentFoodDetailsImageUrl(state),
  foodName: selectCurrentFoodDetailsName(state),
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFoodDetailsTopSectionDispatchProps => ({
  onGoBack: () => dispatch(goBackFromFoodDetails())
});

export const FoodDetailsTopSectionConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodDetailsTopSection);
