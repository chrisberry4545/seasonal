import { connect } from 'react-redux';
import { IState } from '../../store';
import { selectDoesCurrentSeasonHaveRecipes } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { FoodAndRecipeTabs } from '../FoodAndRecipeTabs/FoodAndRecipeTabs';
import { IFoodAndRecipeTabsInputProps } from '../FoodAndRecipeTabs/FoodAndRecipeTabs.interface';
import { SeasonFoodConnector } from '../SeasonFood/SeasonFood.connector';
import { SeasonRecipesConnector } from '../SeasonRecipes/SeasonRecipes.connector';
import { getFoodAndRecipeTabTranslations } from '../FoodAndRecipeTabs/get-food-and-recipe-tab-translations';

const mapStateToProps = (
  state: IState
): IFoodAndRecipeTabsInputProps => ({
  foodScreen: SeasonFoodConnector,
  hasRecipes: selectDoesCurrentSeasonHaveRecipes(state),
  recipeScreen: SeasonRecipesConnector,
  ...getFoodAndRecipeTabTranslations()
});

export const FoodAndRecipeTabsCurrentSeasonConnector = connect(
  mapStateToProps
)(FoodAndRecipeTabs);
