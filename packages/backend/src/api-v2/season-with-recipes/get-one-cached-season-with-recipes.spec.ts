import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getOneCachedSeasonWithRecipes } from './get-one-cached-season-with-recipes';
import * as getOneSeasonWithRecipes from './get-one-season-with-recipes';
import { DEFAULT_REGION_ID } from '../../config';

describe('getOneCachedSeasonWithRecipes', () => {
  const seasonIndex = 1;
  const regionId = 'regionId';
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetOneSeasonWithRecipes: jest.SpyInstance;
  const seasonWithRecipes = {} as IHydratedSeason;
  let result: IHydratedSeason | undefined;
  let innerFunction: (...args: any[]) => Promise<unknown>;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(seasonWithRecipes));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getOneCachedSeasonWithRecipes();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction(seasonIndex, regionId);
    mockGetOneSeasonWithRecipes = jest.spyOn(
      getOneSeasonWithRecipes, 'getOneSeasonWithRecipes'
    ).mockResolvedValue(seasonWithRecipes);
    mockGetOneSeasonWithRecipes.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('single-season-with-recipes'));

  test('returns the expected result', () => expect(result).toBe(seasonWithRecipes));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction(seasonIndex, regionId));

    test('calls getOneSeasonWithRecipes with the correct arguments', () =>
      expect(mockGetOneSeasonWithRecipes).toHaveBeenCalledWith(seasonIndex, regionId));

  });

  describe('when the inner function is called with no regionId', () => {
    beforeEach(() => innerFunction(seasonIndex));

    test('defaults the regionId', () =>
      expect(mockGetOneSeasonWithRecipes).toHaveBeenCalledWith(
        seasonIndex, DEFAULT_REGION_ID
      ));

  });

});
