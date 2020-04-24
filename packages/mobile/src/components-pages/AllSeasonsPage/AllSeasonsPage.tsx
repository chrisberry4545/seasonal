import {
  AllSeasonsFoodConnector,
  AllSeasonsRecipesConnector
} from '../../components-main';
import { CreateFoodAndRecipeTabs } from '../../components-layout';

export const AllSeasonsPage = CreateFoodAndRecipeTabs({
  foodScreen: AllSeasonsFoodConnector,
  recipeScreen: AllSeasonsRecipesConnector
});
