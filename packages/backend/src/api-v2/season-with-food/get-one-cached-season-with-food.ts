import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID } from '../../config';
import { getOneSeasonsWithFood } from './get-one-season-with-food';

const oneSeasonWithFoodCache = new Cache<IHydratedSeason>();
const oneSeasonWithFoodCacheKey = 'single-season-with-food';

export const getOneCachedSeasonWithFood = cacheFunctionResponse(
  oneSeasonWithFoodCache,
  oneSeasonWithFoodCacheKey,
  async (
    seasonIndex: number, regionId: string = DEFAULT_REGION_ID
  ): Promise<IHydratedSeason> => getOneSeasonsWithFood(
    seasonIndex,
    regionId
  )
);
