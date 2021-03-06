import {
  Cache, cacheFunctionResponse
} from '../../cache';
import { IHydratedFood, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID } from '../../config';
import { getDbFoodDetails } from './get-db-food-details';

const singleFoodCache = new Cache<IHydratedFood>();
const singleFoodCacheKey = 'single-food';

export const getCachedFoodDetails = () => cacheFunctionResponse(
  singleFoodCache,
  singleFoodCacheKey,
  (
    foodId: string,
    regionId: string = DEFAULT_REGION_ID,
    language?: LANGUAGES
  ): Promise<IHydratedFood | undefined> => getDbFoodDetails(
    foodId, regionId, language
  )
);
