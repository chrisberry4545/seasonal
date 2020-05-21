import * as cache from '../../cache';
import { Cache } from '../../cache';
import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import { getOneCachedSeasonWithFood } from './get-one-cached-season-with-food';
import * as getOneDbSeasonWithFood from './get-one-db-season-with-food';
import { DEFAULT_REGION_ID } from '../../config';

describe('getOneCachedSeasonWithFood', () => {
  const seasonIndex = 1;
  const regionId = 'regionId';
  let dataCache: Cache<unknown>;
  let cacheKey: string;
  let mockGetOneDbSeasonWithFood: jest.SpyInstance;
  const seasonWithFood = {} as IHydratedSeason;
  let result: IHydratedSeason | undefined;
  let innerFunction: (...args: any[]) => Promise<unknown>;

  beforeEach(async () => {
    const mockCacheFunctionResponse = jest.spyOn(cache, 'cacheFunctionResponse')
      .mockReturnValue(() => Promise.resolve(seasonWithFood));
    mockCacheFunctionResponse.mockClear();
    const cachedFunction = getOneCachedSeasonWithFood();
    const [
      usedCache,
      usedCacheKey,
      usedInnerFunction
    ] = mockCacheFunctionResponse.mock.calls[0];
    dataCache = usedCache;
    cacheKey = usedCacheKey;
    result = await cachedFunction(seasonIndex, regionId);
    mockGetOneDbSeasonWithFood = jest.spyOn(
      getOneDbSeasonWithFood, 'getOneDbSeasonWithFood'
    ).mockResolvedValue(seasonWithFood);
    mockGetOneDbSeasonWithFood.mockClear();
    innerFunction = usedInnerFunction;
  });

  test('adds a cache', () => expect(dataCache).toBeInstanceOf(Cache));

  test('uses the expected cache key', () => expect(cacheKey).toBe('single-season-with-food'));

  test('returns the expected result', () => expect(result).toBe(seasonWithFood));

  describe('when the inner function is called', () => {
    beforeEach(() => innerFunction(seasonIndex, regionId));

    test('calls getOneDbSeasonWithFood with the correct arguments', () =>
      expect(mockGetOneDbSeasonWithFood).toHaveBeenCalledWith(seasonIndex, regionId));

  });

  describe('when the inner function is called with no regionId', () => {
    beforeEach(() => innerFunction(seasonIndex));

    test('defaults the regionId', () =>
      expect(mockGetOneDbSeasonWithFood).toHaveBeenCalledWith(
        seasonIndex, DEFAULT_REGION_ID
      ));

  });

});
