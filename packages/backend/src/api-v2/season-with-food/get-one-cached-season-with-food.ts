import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID, DEFAULT_LANGUAGE_ID } from '../../config';
import { getOneDbSeasonWithFood } from './get-one-db-season-with-food';

const oneSeasonWithFoodCache = new Cache<IHydratedSeason>();
const oneSeasonWithFoodCacheKey = 'single-season-with-food';

export const getOneCachedSeasonWithFood = () => cacheFunctionResponse(
  oneSeasonWithFoodCache,
  oneSeasonWithFoodCacheKey,
  async (
    seasonIndex: number,
    regionId: string = DEFAULT_REGION_ID,
    language: LANGUAGES = DEFAULT_LANGUAGE_ID
  ): Promise<IHydratedSeason | undefined> => getOneDbSeasonWithFood(
    seasonIndex,
    regionId,
    language
  )
);
