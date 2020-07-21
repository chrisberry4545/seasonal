import {
  Cache, cacheFunctionResponse
} from '../../cache';
import { IHydratedBadge, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { DEFAULT_REGION_ID, DEFAULT_LANGUAGE_ID } from '../../config';
import { getDbBadgeDetails } from './get-db-badge-details';

const singleBadgeCache = new Cache<IHydratedBadge>();
const singleBadgeCacheKey = 'single-badge';

export const getCachedBadgeDetails = () => cacheFunctionResponse(
  singleBadgeCache,
  singleBadgeCacheKey,
  (
    badgeId: string,
    regionId: string = DEFAULT_REGION_ID,
    language: LANGUAGES = DEFAULT_LANGUAGE_ID
  ): Promise<IHydratedBadge | undefined> => getDbBadgeDetails(
    badgeId, regionId, language
  )
);
