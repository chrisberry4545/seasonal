import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getAllCachedSeasonsWithFood } from './get-all-cached-seasons-with-food';
import * as getAllSeasonsWithFood from './get-all-seasons-with-food';
import { DEFAULT_REGION_ID } from '../../config';

describe('getAllCachedSeasonsWithFood', () => {
  const regionId = 'regionId';
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetAllSeasonsWithFood: jest.SpyInstance;
  const allSeasonsWithFood = [{}] as IHydratedSeason[];
  let result: IHydratedSeason[];
  let innerFunction: (...args: any[]) => Promise<unknown>;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(allSeasonsWithFood));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getAllCachedSeasonsWithFood();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction(regionId);
    mockGetAllSeasonsWithFood = jest.spyOn(
      getAllSeasonsWithFood, 'getAllSeasonsWithFood'
    ).mockResolvedValue(allSeasonsWithFood);
    mockGetAllSeasonsWithFood.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('all-seasons-with-food'));

  test('returns the expected result', () => expect(result).toBe(allSeasonsWithFood));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction(regionId));

    test('calls getAllSeasonsWithFood with the correct arguments', () =>
      expect(mockGetAllSeasonsWithFood).toHaveBeenCalledWith(regionId));

  });

  describe('when the inner function is called with no regionId', () => {
    beforeEach(() => innerFunction());

    test('defaults the regionId', () =>
      expect(mockGetAllSeasonsWithFood).toHaveBeenCalledWith(
        DEFAULT_REGION_ID
      ));

  });

});
