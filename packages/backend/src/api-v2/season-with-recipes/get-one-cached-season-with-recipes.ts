import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID, DEFAULT_LANGUAGE_ID } from '../../config';
import { getOneDbSeasonWithRecipes } from './get-one-db-season-with-recipes';

const singleSeasonWithRecipeCache = new Cache<IHydratedSeason>();
const singleSeasonWithRecipeCacheKey = 'single-season-with-recipes';

export const getOneCachedSeasonWithRecipes = () => cacheFunctionResponse(
  singleSeasonWithRecipeCache,
  singleSeasonWithRecipeCacheKey,
  async (
    seasonIndex: number,
    regionId: string = DEFAULT_REGION_ID,
    language: LANGUAGES = DEFAULT_LANGUAGE_ID
  ): Promise<IHydratedSeason | undefined> => getOneDbSeasonWithRecipes(
    seasonIndex,
    regionId,
    language
  )
);
