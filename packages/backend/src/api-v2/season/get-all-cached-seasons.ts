import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IBaseSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getAllDbSeasons } from './get-all-db-seasons';

const allSeasonsCache = new Cache<IBaseSeason[]>();
const allSeasonsCacheKey = 'all-seasons';

export const getAllCachedSeasons = () => cacheFunctionResponse(
  allSeasonsCache,
  allSeasonsCacheKey,
  async (
    language?: LANGUAGES
  ): Promise<IBaseSeason[]> => await getAllDbSeasons(language)
);
