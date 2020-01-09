import { connect } from 'react-redux';
import {
  SeasonsForFood
} from './SeasonsForFood';
import {
  selectSeasonsSelectedForFood,
  foodDetailsSelectSeason,
  selectIsFoodDataOrBasicSeasonsLoading
} from '@chrisb-dev/seasonal-shared';

import { IState } from '../../interfaces';
import {
  ISeasonForFoodInputProps,
  ISeasonForFoodDispatchProps
} from './SeasonsForFood.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonForFoodInputProps => ({
  isLoading: selectIsFoodDataOrBasicSeasonsLoading(state),
  seasonsSelectedForFood: selectSeasonsSelectedForFood(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonForFoodDispatchProps => ({
  onSeasonSelected: (seasonIndex: number) => (
    dispatch(foodDetailsSelectSeason(seasonIndex))
  )
});

export const SeasonsForFoodConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonsForFood);
