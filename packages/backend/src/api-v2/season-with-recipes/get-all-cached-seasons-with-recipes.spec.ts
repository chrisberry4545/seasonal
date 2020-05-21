import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getAllCachedSeasonsWithRecipes } from './get-all-cached-seasons-with-recipes';
import * as getAllSeasonsWithRecipes from './get-all-seasons-with-recipes';
import { DEFAULT_REGION_ID } from '../../config';

describe('getAllCachedSeasonsWithRecipes', () => {
  const regionId = 'regionId';
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetAllSeasonsWithRecipes: jest.SpyInstance;
  const allSeasonsWithRecipes = [{}] as IHydratedSeason[];
  let result: IHydratedSeason[];
  let innerFunction: (...args: any[]) => Promise<unknown>;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(allSeasonsWithRecipes));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getAllCachedSeasonsWithRecipes();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction(regionId);
    mockGetAllSeasonsWithRecipes = jest.spyOn(
      getAllSeasonsWithRecipes, 'getAllSeasonsWithRecipes'
    ).mockResolvedValue(allSeasonsWithRecipes);
    mockGetAllSeasonsWithRecipes.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('all-seasons-with-recipes'));

  test('returns the expected result', () => expect(result).toBe(allSeasonsWithRecipes));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction(regionId));

    test('calls getAllSeasonsWithRecipes with the correct arguments', () =>
      expect(mockGetAllSeasonsWithRecipes).toHaveBeenCalledWith(regionId));

  });

  describe('when the inner function is called with no regionId', () => {
    beforeEach(() => innerFunction());

    test('defaults the regionId', () =>
      expect(mockGetAllSeasonsWithRecipes).toHaveBeenCalledWith(
        DEFAULT_REGION_ID
      ));

  });

});
