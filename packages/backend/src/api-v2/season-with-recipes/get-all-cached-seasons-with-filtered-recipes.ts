import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { filterRecipesByDiet } from '../food/filter-recipes-by-diet';
import { getAllCachedSeasonsWithRecipes } from './get-all-cached-seasons-with-recipes';

export const getAllCachedSeasonsWithFilteredRecipes = async (
  isVegetarian: boolean,
  isVegan: boolean,
  regionId?: string,
  language?: LANGUAGES
): Promise<IHydratedSeason[]> => {
  const result = await getAllCachedSeasonsWithRecipes()(regionId, language);
  return result.map((season) => ({
    ...season,
    recipes: filterRecipesByDiet(season.recipes, isVegetarian, isVegan)
  }));
};
