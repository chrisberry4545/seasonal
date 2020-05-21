import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getAllCachedSeasons } from './get-all-cached-seasons';
import * as getAllSeasons from './get-all-seasons';

describe('getAllCachedSeasons', () => {
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetAllSeasons: jest.SpyInstance;
  const allSeasons = [{}] as IHydratedSeason[];
  let result: IHydratedSeason[];
  let innerFunction: (...args: any[]) => Promise<unknown>;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(allSeasons));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getAllCachedSeasons();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction();
    mockGetAllSeasons = jest.spyOn(
      getAllSeasons, 'getAllSeasons'
    ).mockResolvedValue(allSeasons);
    mockGetAllSeasons.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('all-seasons'));

  test('returns the expected result', () => expect(result).toBe(allSeasons));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction());

    test('calls getAllSeasons with the correct arguments', () =>
      expect(mockGetAllSeasons).toHaveBeenCalled());

  });

});
