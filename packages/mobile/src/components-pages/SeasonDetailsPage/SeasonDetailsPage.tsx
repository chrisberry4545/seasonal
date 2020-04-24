import {
  CreateFoodAndRecipeTabs
} from '../../components-layout';
import { SeasonFoodConnector, SeasonRecipesConnector } from '../../components-main';

export const SeasonDetailsPage = CreateFoodAndRecipeTabs({
  foodScreen: SeasonFoodConnector,
  recipeScreen: SeasonRecipesConnector
});
