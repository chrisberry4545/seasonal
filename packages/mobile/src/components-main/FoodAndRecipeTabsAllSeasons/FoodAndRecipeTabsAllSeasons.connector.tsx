import { connect } from 'react-redux';
import { IState } from '../../store';
import { selectDoesAllSeasonsHaveRecipes } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { FoodAndRecipeTabs } from '../FoodAndRecipeTabs/FoodAndRecipeTabs';
import { IFoodAndRecipeTabsInputProps } from '../FoodAndRecipeTabs/FoodAndRecipeTabs.interface';
import { AllSeasonsFoodConnector } from '../AllSeasonsFood/AllSeasonsFood.connector';
import { AllSeasonsRecipesConnector } from '../AllSeasonsRecipes/AllSeasonsRecipes.connector';
import { getFoodAndRecipeTabTranslations } from '../FoodAndRecipeTabs/get-food-and-recipe-tab-translations';

const mapStateToProps = (
  state: IState
): IFoodAndRecipeTabsInputProps => ({
  foodScreen: AllSeasonsFoodConnector,
  hasRecipes: selectDoesAllSeasonsHaveRecipes(state),
  recipeScreen: AllSeasonsRecipesConnector,
  ...getFoodAndRecipeTabTranslations()
});

export const FoodAndRecipeTabsAllSeasonsConnector = connect(
  mapStateToProps
)(FoodAndRecipeTabs);
