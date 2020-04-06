import {
  getSeasonsDataWithRecipesBySeasonIndex,
  getAllSeasonDataWithRecipes
} from '../data-access';

import {
  Cache,
  cacheFunctionResponse
} from '../cache';

import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { filterRecipesByDiet } from './filter-recipes-by-diet';
import { DEFAULT_REGION_ID } from '../config';

const allSeasonsWithRecipesCache = new Cache<IHydratedSeason[]>();
const allSeasonsWithRecipesCacheKey = 'season-with-recipes';

const singleSeasonWithRecipeCache = new Cache<IHydratedSeason>();
const singleSeasonWithRecipeCacheKey = 'single-season-with-recipes';

export const fetchSeasonWithRecipes = cacheFunctionResponse(
  singleSeasonWithRecipeCache,
  singleSeasonWithRecipeCacheKey,
  async (
    seasonIndex: number, regionId: string = DEFAULT_REGION_ID
  ): Promise<IHydratedSeason> =>
    getSeasonsDataWithRecipesBySeasonIndex(seasonIndex, regionId)
);

export const fetchAllSeasonsWithRecipes = cacheFunctionResponse(
  allSeasonsWithRecipesCache,
  allSeasonsWithRecipesCacheKey,
  async (
    regionId: string = DEFAULT_REGION_ID
  ): Promise<IHydratedSeason[]> =>
    getAllSeasonDataWithRecipes(regionId)
);

export const fetchFilteredSeasonsWithRecipes = async (
  seasonIndex: number,
  isVegetarian: boolean,
  isVegan: boolean,
  regionId?: string
): Promise<IHydratedSeason> => {
  const result = await fetchSeasonWithRecipes(seasonIndex, regionId);
  return {
    ...result,
    recipes: filterRecipesByDiet(result.recipes, isVegetarian, isVegan)
  };
};
