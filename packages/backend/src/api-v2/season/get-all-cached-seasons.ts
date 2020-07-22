import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IBaseSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getAllDbSeasons } from './get-all-db-seasons';
import { DEFAULT_LANGUAGE_ID } from '../../config';

const allSeasonsCache = new Cache<IBaseSeason[]>();
const allSeasonsCacheKey = 'all-seasons';

export const getAllCachedSeasons = () => cacheFunctionResponse(
  allSeasonsCache,
  allSeasonsCacheKey,
  async (
    language: LANGUAGES = DEFAULT_LANGUAGE_ID
  ): Promise<IBaseSeason[]> => await getAllDbSeasons(language)
);
