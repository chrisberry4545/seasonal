import { IHydratedFood } from '@chrisb-dev/seasonal-shared-models';
import { filterRecipesByDiet } from './filter-recipes-by-diet';
import { getCachedFoodDetails } from './get-cached-food-details';

export const getCachedFoodDetailsWithFilteredRecipes = async (
  foodId: string,
  isVegetarian: boolean,
  isVegan: boolean,
  regionId?: string
): Promise<IHydratedFood | undefined> => {
  const result = await getCachedFoodDetails()(foodId, regionId);
  return result && {
    ...result,
    primaryFoodInRecipe: filterRecipesByDiet(
      result.primaryFoodInRecipe,
      isVegetarian,
      isVegan
    ),
    secondaryFoodInRecipe: filterRecipesByDiet(
      result.secondaryFoodInRecipe,
      isVegetarian,
      isVegan
    )
  };
};
