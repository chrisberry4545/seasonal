import { connect } from 'react-redux';
import {
  BottomTabs
} from './BottomTabs';
import {
  goToFoodTab,
  goToRecipesTab,
  selectIsCurrentTabFood,
  selectIsCurrentTabRecipes
} from '../../store';
import {
  IBottomTabDispatchProps,
  IBottomTabInputProps
} from './BottomTabs.interface';
import { Dispatch } from 'redux';
import { IState } from '../../store';

const mapStateToProps = (
  state: IState
): IBottomTabInputProps => ({
  isCurrentTabFood: selectIsCurrentTabFood(state),
  isCurrentTabRecipes: selectIsCurrentTabRecipes(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IBottomTabDispatchProps => ({
  goToFoodTab: () => dispatch(goToFoodTab()),
  goToRecipesTab: () => dispatch(goToRecipesTab())
});

export const BottomTabsConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomTabs);
