import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID } from '../../config';
import { getAllSeasonsWithFood } from './get-all-seasons-with-food';

const allSeasonsWithFoodCache = new Cache<IHydratedSeason[]>();
const allSeasonsWithFoodCacheKey = 'all-seasons-with-food';

export const getAllCachedSeasonsWithFood = () => cacheFunctionResponse(
  allSeasonsWithFoodCache,
  allSeasonsWithFoodCacheKey,
  async (
    regionId: string = DEFAULT_REGION_ID
  ): Promise<IHydratedSeason[]> => getAllSeasonsWithFood(regionId)
);
