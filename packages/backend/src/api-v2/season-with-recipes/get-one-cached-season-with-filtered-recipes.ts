import { getOneCachedSeasonWithRecipes } from './get-one-cached-season-with-recipes';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { filterRecipesByDiet } from '../food/filter-recipes-by-diet';

export const getOneCachedSeasonsWithFilteredRecipes = async (
  seasonIndex: number,
  isVegetarian: boolean,
  isVegan: boolean,
  regionId?: string
): Promise<IHydratedSeason | undefined> => {
  const result = await getOneCachedSeasonWithRecipes()(seasonIndex, regionId);
  return result && {
    ...result,
    recipes: filterRecipesByDiet(result.recipes, isVegetarian, isVegan)
  };
};
