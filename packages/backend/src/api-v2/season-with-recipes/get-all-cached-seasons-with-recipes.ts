import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID } from '../../config';
import { getAllDbSeasonsWithRecipes } from './get-all-db-seasons-with-recipes';

const allSeasonsWithRecipesCache = new Cache<IHydratedSeason[]>();
const allSeasonsWithRecipesCacheKey = 'all-seasons-with-recipes';

export const getAllCachedSeasonsWithRecipes = () => cacheFunctionResponse(
  allSeasonsWithRecipesCache,
  allSeasonsWithRecipesCacheKey,
  async (
    regionId: string = DEFAULT_REGION_ID
  ): Promise<IHydratedSeason[]> => getAllDbSeasonsWithRecipes(regionId)
);
