import { connect } from 'react-redux';
import {
  AllSeasonsRecipes
} from './AllSeasonsRecipes';

import { IState, selectIsCurrentTabRecipes } from '../../store';
import {
  IAllSeasonsRecipesInputProps,
  IAllSeasonsRecipesDispatchProps
} from './AllSeasonsRecipes.interface';
import { Dispatch } from 'redux';
import {
  selectAllSeasonsVisibleRecipesData,
  selectIsAllSeasonsRecipesLoading,
  increaseNumberOfAllSeasonsInView,
  selectHasMoreSeasonsInAllSeasonsView,
  recipeItemClicked
} from '@chrisb-dev/seasonal-shared-frontend-redux';

const mapStateToProps = (
  state: IState
): IAllSeasonsRecipesInputProps => ({
  hasMoreSeasonsInAllSeasonsView: selectHasMoreSeasonsInAllSeasonsView(state),
  isCurrentTabRecipes: selectIsCurrentTabRecipes(state),
  isLoading: selectIsAllSeasonsRecipesLoading(state),
  seasons: selectAllSeasonsVisibleRecipesData(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IAllSeasonsRecipesDispatchProps => ({
  increaseNumberOfAllSeasonsInView: () => (
    dispatch(increaseNumberOfAllSeasonsInView())
  ),
  onRecipeClick: (foodItemId: string) => dispatch(recipeItemClicked(foodItemId))
});

export const AllSeasonsRecipesConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSeasonsRecipes);
