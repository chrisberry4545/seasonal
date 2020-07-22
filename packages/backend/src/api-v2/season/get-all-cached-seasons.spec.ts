import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedSeason, LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import { getAllCachedSeasons } from './get-all-cached-seasons';
import * as getAllDbSeasons from './get-all-db-seasons';
import { DEFAULT_LANGUAGE_ID } from '../../config';

describe('getAllCachedSeasons', () => {
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetDbAllSeasons: jest.SpyInstance;
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
    mockGetDbAllSeasons = jest.spyOn(
      getAllDbSeasons, 'getAllDbSeasons'
    ).mockResolvedValue(allSeasons);
    mockGetDbAllSeasons.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('all-seasons'));

  test('returns the expected result', () => expect(result).toBe(allSeasons));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction());

    test('calls getAllSeasons with the default language', () =>
      expect(mockGetDbAllSeasons).toHaveBeenCalledWith(DEFAULT_LANGUAGE_ID));

  });

  describe('when the inner function is called with a language', () => {
    beforeEach(() => innerFunction(LANGUAGES.EN_US));

    test('calls getAllSeasons with that language', () =>
      expect(mockGetDbAllSeasons).toHaveBeenCalledWith(LANGUAGES.EN_US));
  });

});
