import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID, DEFAULT_LANGUAGE_ID } from '../../config';
import { getAllDbSeasonsWithFood } from './get-all-db-seasons-with-food';

const allSeasonsWithFoodCache = new Cache<IHydratedSeason[]>();
const allSeasonsWithFoodCacheKey = 'all-seasons-with-food';

export const getAllCachedSeasonsWithFood = () => cacheFunctionResponse(
  allSeasonsWithFoodCache,
  allSeasonsWithFoodCacheKey,
  async (
    regionId: string = DEFAULT_REGION_ID,
    language: LANGUAGES = DEFAULT_LANGUAGE_ID
  ): Promise<IHydratedSeason[]> => getAllDbSeasonsWithFood(regionId, language)
);
