import { getOneCachedSeasonWithRecipes } from './get-one-cached-season-with-recipes';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { filterRecipesByDiet } from '../food/filter-recipes-by-diet';

export const getOneCachedSeasonsWithFilteredRecipes = async (
  seasonIndex: number,
  isVegetarian: boolean,
  isVegan: boolean,
  regionId?: string,
  language?: LANGUAGES
): Promise<IHydratedSeason | undefined> => {
  const result = await getOneCachedSeasonWithRecipes()(seasonIndex, regionId, language);
  return result && {
    ...result,
    recipes: filterRecipesByDiet(result.recipes, isVegetarian, isVegan)
  };
};
