import {
  Cache,
  cacheFunctionResponse
} from '../../cache';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import { getAllSeasons } from './get-all-seasons';

const allSeasonsCache = new Cache<IBaseSeason[]>();
const allSeasonsCacheKey = 'seasons';

export const getAllCachedSeasons = cacheFunctionResponse(
  allSeasonsCache,
  allSeasonsCacheKey,
  async (): Promise<IBaseSeason[]> => await getAllSeasons()
);
