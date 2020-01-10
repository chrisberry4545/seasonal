import { connect } from 'react-redux';
import {
  FoodDetailsLoader
} from './FoodDetailsLoader';
import {
  selectIsFoodDataOrBasicSeasonsLoading
} from '@chrisb-dev/seasonal-shared';

import { IState } from '../../interfaces';
import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';

const mapStateToProps = (
  state: IState
): IFoodDetailsLoaderInputProps => ({
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state)
});

export const FoodDetailsLoaderConnecter = connect(
  mapStateToProps
)(FoodDetailsLoader);
