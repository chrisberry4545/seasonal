import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedBadge, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getCachedBadgeDetails } from './get-cached-badge-details';
import * as getDbBadgeDetails from './get-db-badge-details';
import { DEFAULT_REGION_ID } from '../../config';

describe('getCachedBadgeDetails', () => {
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetDbBadgeDetails: jest.SpyInstance;
  const badgeDetails = {} as IHydratedBadge;
  let result: IHydratedBadge | undefined;
  let innerFunction: (...args: any[]) => Promise<unknown>;
  const badgeId = 'badgeId';
  const regionId = 'regionId';
  const language = LANGUAGES.EN_US;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(badgeDetails));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getCachedBadgeDetails();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction(badgeId, regionId, language);
    mockGetDbBadgeDetails = jest.spyOn(
      getDbBadgeDetails, 'getDbBadgeDetails'
    ).mockResolvedValue(badgeDetails);
    mockGetDbBadgeDetails.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('single-badge'));

  test('returns the expected result', () => expect(result).toBe(badgeDetails));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction(badgeId, regionId, language));

    test('calls getDbBadgeDetails with the correct arguments', () =>
      expect(mockGetDbBadgeDetails).toHaveBeenCalledWith(
        badgeId, regionId, language
      ));

  });

  describe('when the inner function is called with no regionId', () => {
    beforeEach(() => innerFunction(badgeId));

    test('defaults the regionId', () =>
      expect(mockGetDbBadgeDetails).toHaveBeenCalledWith(
        badgeId, DEFAULT_REGION_ID, undefined
      ));

  });

});
